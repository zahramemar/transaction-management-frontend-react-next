import { render } from "@testing-library/react";
import { ErrorMessage } from "./index";

describe("<ErrorMessage />", () => {
  it("should contain error strings", () => {
    const e1 = "error1";
    const e2 = "error2";
    const { container } = render(<ErrorMessage errors={[e1, e2]} />);
    expect(container).toHaveTextContent(e1);
    expect(container).toHaveTextContent(e2);
  });
});
