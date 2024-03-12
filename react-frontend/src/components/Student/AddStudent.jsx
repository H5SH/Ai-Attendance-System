import WebCam from "../../utilities/WebCam";
import { useState } from "react";

function AddStudent(){

    const [file, setFile] = useState('')

    return (
        <div className="items-center justify-center">
            <WebCam file={file} setFile={setFile}/>
        </div>
    )
}

export default AddStudent