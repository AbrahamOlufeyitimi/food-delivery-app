import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "./LoginForm";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";


describe("Login component", () => {
    it("renders the form", () => {
        render(<Login/>);

        expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    });

    
});