import Webcam from 'react-webcam'
import { useState } from 'react'

function WebCam({ setFile, file }) {
    const [imageSrc, setImageSrc] = useState('')

    async function saveImage() {
        try {
            const response = await fetch(imageSrc)
            const blob = await response.blob()
            const file = new File([blob], 'student.jpeg', { type: 'image/jpeg' })
            setFile(file)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {imageSrc.length === 0 ?
                <>
                    <Webcam
                        audio={false}
                        height={500}
                        screenshotFormat='image/jpeg'
                        width={500}
                        videoConstraints={{
                            width: 240,
                            height: 250,
                            facingMode: 'user'
                        }}
                        mirrored
                        onUserMediaError={() => (
                            <div style={{ color: 'red' }}>
                                No Camera Was Found
                            </div>
                        )}
                        >
                        {({ getScreenshot }) => (
                            <input
                                type='button'
                                value='Capture'
                                onClick={() => {
                                    setImageSrc(getScreenshot())
                                }}
                                className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                            />
                        )}</Webcam>
                </> :
                <>
                    <img
                        src={imageSrc}
                        width={500}
                        height={500}
                    />
                    <div>
                        <input
                            type='button'
                            value={file ? 'Saved' : 'Save'}
                            onClick={saveImage}
                            disabled={file ? true : false}
                            className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                        />

                        <input
                            type='button'
                            value='Retake'
                            onClick={() => {
                                setImageSrc('')
                                setFile(null)
                            }}
                            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                        />
                    </div>
                </>}
        </>
    )
}

export default WebCam