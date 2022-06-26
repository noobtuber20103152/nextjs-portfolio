import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
function Animetes() {
    const data = "1. It’a a live anime streaming website which is built during hackmol 3.0 organised by members of DSC NITJ.\n\n2. React js as a frontend library and Node JS backend technology.\n\n3. MongoDB used as database for storing the comments.\n\n4. Socket.io use for live chat functionality.\n"
    return <>
            <CopyBlock showLineNumbers={false} className="animate-fadeIn" style={{ color: "black", padding: "10px 5px", fontSize: "20px" }}
                text={data}
                theme={dracula}
                wrapLines={true}
                language="python"
            />
        </>
}

export default Animetes;