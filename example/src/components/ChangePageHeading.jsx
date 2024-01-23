import React from 'react';

const ChangePageHeading = (props) => {
    
    const handleChange = (event) => {
        const eventInput = event.target; // Grabs element from web page.
        const typedValue = eventInput.value;
        props.setHeading(typedValue);
    };

    return (
        <section>
            <input
                onChange={handleChange}
                value={props.heading}
            />
            <p>
                <strong>Preview of Heading:</strong>
                &nbsp;
                {props.heading}
            </p>
        </section>
    );
};

export default ChangePageHeading;