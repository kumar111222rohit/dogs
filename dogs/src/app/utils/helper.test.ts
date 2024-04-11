import { generateErrorResponse } from "./helper";

describe("generateErrorResponse", () => {
  it("should create error response object", () => {
    const message = "Error occurred";
    const result = generateErrorResponse(message);
    expect(result).toEqual({ status: "error", message });
  });
});
