import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
function Blog() {
    const data = "1. It’s a blog website with user authentication, blog creation , comment section for comment on other’s blogs, separate comment page and profile page corresponding to logged in users where he/she can find blogs written by him/her.\n\n2. Built in Next JS , MongoDB use for database to store data, JWT for user authentication and tailwind CSS use for design.\n\n3. Some other functionality like top loading bar when navigate from one page to another, beautiful alert message make this website more user friendly."
    return <>
        <CopyBlock showLineNumbers={false} className="animate-fadeIn h-[100vh]" style={{ color: "black", padding: "10px 5px", fontSize: "20px" }}
            text={data}
            theme={dracula}
            wrapLines={true}
            language="python"
        />
    </>

}

export default Blog