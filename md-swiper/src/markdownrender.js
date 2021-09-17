import React from 'react';
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown';

const MarkdownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;

const markdown = `
**hi!**
`;

function markdownrender() {
    return(
        <MarkdownStyle>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </MarkdownStyle>
    )
}

export default markdownrender;