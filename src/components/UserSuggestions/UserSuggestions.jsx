import React, { useState } from "react";
import "./UserSuggestions.css";

const UserSuggestions = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        suggestion: "",
    });

    const [message, setMessage] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/submit-suggestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage("Thank you for your suggestion!");
                setFormData({ name: "", email: "", suggestion: "" }); // Reset the form
            } else {
                const error = await response.text();
                setMessage(`Error: ${error}`);
            }
        } catch (error) {
            setMessage("Error submitting the form. Please try again later.");
        }
    };

    return (
        <div className="user-suggestions">
            <h1 className="header">User Suggestions</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name here"
                    required
                />
                <br /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your valid Email here"
                    required
                />
                <br /><br />

                <label htmlFor="suggestion">Suggestion:</label>
                <br />
                <textarea
                    id="suggestion"
                    name="suggestion"
                    rows="4"
                    cols="50"
                    value={formData.suggestion}
                    onChange={handleChange}
                    placeholder="You can give suggestions about a restaurant here"
                    required
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserSuggestions;
