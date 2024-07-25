import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "../advancedReact/FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    render(<FeedbackForm onSubmit={handleSubmit} />);
    const score = "4";
    const comment = "This pizza place is horribly good..";
    const handleSubmit = jest.fn();
   

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });
});
