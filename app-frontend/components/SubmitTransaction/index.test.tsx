import { act, fireEvent, render } from "@testing-library/react";
import { SubmitTransaction } from "./index";
import idObj from "identity-obj-proxy";

(window as any).fetch = jest.fn(async () => ({
  async json() {
    return idObj;
  },
}));

describe("<SubmitTransaction />", () => {
  beforeEach(() => {
    (window.fetch as any).mockRestore();
  });

  it("should show error if fields are empty and submit button has clicked", async () => {
    const { getByText, getByTestId, findByTestId } = render(
      <SubmitTransaction />
    );

    fireEvent.click(getByText("Submit"));
    await findByTestId("input-error-amount");
    expect(getByTestId("input-error-amount")).toBeVisible();
    expect(getByTestId("input-error-accountId")).toBeVisible();
    expect(window.fetch).not.toBeCalled();
  });

  it("should show error if amount field is empty and submit button has clicked", async () => {
    const {
      getByText,
      getByLabelText,
      getByTestId,
      queryByTestId,
      findByTestId,
    } = render(<SubmitTransaction />);

    fireEvent.change(getByLabelText("Account ID"), {
      target: { value: "6862092b-ef27-494f-b720-5790582b35c8" },
    });

    fireEvent.click(getByText("Submit"));
    await findByTestId("input-error-amount");
    expect(getByTestId("input-error-amount")).toBeVisible();
    expect(queryByTestId("input-error-accountId")).not.toBeInTheDocument();
    expect(window.fetch).not.toBeCalled();
  });

  it("should show error if accountId field is empty and submit button has clicked", async () => {
    const {
      getByText,
      getByLabelText,
      getByTestId,
      queryByTestId,
      findByTestId,
    } = render(<SubmitTransaction />);

    fireEvent.change(getByLabelText("Amount"), {
      target: { value: "2000" },
    });

    fireEvent.click(getByText("Submit"));
    await findByTestId("input-error-accountId");
    expect(getByTestId("input-error-accountId")).toBeVisible();
    expect(queryByTestId("input-error-amount")).not.toBeInTheDocument();
  });

  it("should show type error if you do not insert uuid in account id", async () => {
    const { getByLabelText, getByText, getByTestId, findByTestId } = render(
      <SubmitTransaction />
    );
    fireEvent.change(getByLabelText("Account ID"), {
      target: { value: "xxxx" },
    });

    fireEvent.click(getByText("Submit"));
    await findByTestId("input-error-accountId");
    expect(getByTestId("input-error-accountId")).toHaveTextContent(
      "accountId must be a valid UUID"
    );
  });

  it("should show type error if you do not insert number in amount", async () => {
    const { getByLabelText, getByText, getByTestId, findByTestId } = render(
      <SubmitTransaction />
    );
    fireEvent.change(getByLabelText("Amount"), {
      target: { value: "abcd" },
    });

    fireEvent.click(getByText("Submit"));
    await findByTestId("input-error-amount");
    expect(getByTestId("input-error-amount")).toHaveTextContent(
      "Amount must be a number"
    );
  });

  it("should reset the fields after clicking on submit", async () => {
    const { getByLabelText, getByText } = render(<SubmitTransaction />);

    fireEvent.change(getByLabelText("Amount"), {
      target: { value: "1000" },
    });

    fireEvent.change(getByLabelText("Account ID"), {
      target: { value: "6862092b-ef27-494f-b720-5790582b35c8" },
    });

    await act(() => {
      fireEvent.click(getByText("Submit"));
      return Promise.resolve();
    });

    expect(window.fetch).toBeCalled();
    expect(getByLabelText("Amount")).toBeEmptyDOMElement();
    expect(getByLabelText("Account ID")).toBeEmptyDOMElement();
  });

  it("should show error component if submit has failed", async () => {
    const errorMsg = "example error message";

    const { container, getByLabelText, getByText } = render(
      <SubmitTransaction />
    );

    fireEvent.change(getByLabelText("Amount"), {
      target: { value: "1000" },
    });

    fireEvent.change(getByLabelText("Account ID"), {
      target: { value: "6862092b-ef27-494f-b720-5790582b35c8" },
    });

    (window.fetch as any).mockRejectedValue(new Error(errorMsg));
    await act(() => {
      fireEvent.click(getByText("Submit"));
      return Promise.resolve();
    });

    expect(container).toHaveTextContent(errorMsg);
  });
});
