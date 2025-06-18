import React from "react";

import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'

import DataPreview from "./DataPreview";

describe('DataPreview', () => {
    const mockData = {
        name: 'aaa bbb',
        age: '40'
    }

    const handleCloseMock = jest.fn();

    test('should open dialog with form data', () => {
        render(<DataPreview open={true} data={mockData} onClose={jest.fn()} />)
        expect(screen.getByText('Preview data')).toBeInTheDocument();
    })

    test('should close dialog when close button is pressed', () => {
        render(<DataPreview open={true} data={mockData} onClose={handleCloseMock} />)
        const close = screen.getByText('CLOSE')
        fireEvent.click(close);
        expect(handleCloseMock).toHaveBeenCalled();
    })

    test('should not render dialog when open is false', () => {
        render(<DataPreview open={false} data={mockData} onClose={handleCloseMock} />)
        expect(screen.queryByText('Preview data')).not.toBeInTheDocument()
    })

    test('should not render dialog when open is false', () => {
        render(<DataPreview open={true} data={undefined} onClose={handleCloseMock} />)
        expect(screen.queryByText('Preview data')).not.toBeInTheDocument()
    })
})