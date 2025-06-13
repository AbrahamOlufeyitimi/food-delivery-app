import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Button component", () => {
    it("renders with text", () => {
    render(
        <BrowserRouter>
            <Button>Click Me</Button>
        </BrowserRouter>
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("calls onClick when clicked", async () => {
        const handleClick = vi.fn(); 

        render(<Button onClick={handleClick}>Click Me</Button>);

        const button = screen.getByRole("button");
        await userEvent.click(button);

        expect(handleClick).toHaveBeenCalled(); 
    });

    it("renders as a link when 'path' prop is passed", () => {
        render(
            <BrowserRouter>
            <Button path="/about">About</Button>
            </BrowserRouter>
        );

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/about");
    });

});

