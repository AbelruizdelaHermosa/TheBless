import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ReturHome () {
    return (
                <Link to="/">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                    </svg>
                </Link>
    )
}

export default ReturHome