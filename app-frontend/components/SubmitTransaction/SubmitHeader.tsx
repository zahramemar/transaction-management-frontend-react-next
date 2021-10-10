import { Logo } from "../Logo";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";

export function SubmitHeader() {
  return (
    <div>
      <Logo />
      <div className="mt-6">
        <Title>Submit New Transaction</Title>
      </div>
      <div className="mt-2">
        <Subtitle>you need to enter amount and account id</Subtitle>
      </div>
    </div>
  );
}
