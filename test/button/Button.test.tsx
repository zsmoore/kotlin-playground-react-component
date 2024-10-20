/**
 * @jest-environment jsdom
 */

import { render, cleanup, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import { Button } from "../../src";
import React from "react";

afterEach(() => {
    cleanup();
})

describe("Button Component", () => {
    render(<Button label="test"/>);

    test("Button Rendering", () => {
        const text = screen.getByText("test");
        expect(text).toBeInTheDocument();
    })
})
