import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
function Ebook() {
    const data = "1. Built in Next JS and use mongoDb for database to store the search query.\n\n2. Fetch the data from google book store api.\n\n3. Allow only authenticate user to search the books.\n\n4. Google authentication.\n"
    return <>
            <CopyBlock showLineNumbers={false} className="animate-fadeIn" style={{ color: "black", padding: "10px 5px", fontSize: "20px" }}
                text={data}
                theme={dracula}
                wrapLines={true}
                language="python"
            />
        </>
    
}

export default Ebook;