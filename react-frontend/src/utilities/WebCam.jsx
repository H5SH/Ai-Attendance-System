import Webcam from 'react-webcam'

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
                        height={250}
                        screenshotFormat='image/jpeg'
                        width={240}
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
                        {({ getScreenshot }) => (
                            <input
                                type='button'
                                value='Capture'
                                onClick={() => {
                                    setImageSrc(getScreenshot())
                                }}
                            />
                        )} />
                </> :
                <>
                    <img
                        src={imageSrc}
                        width={240}
                        height={250}
                    />
                    <div>
                        <input
                            type='button'
                            value={file ? 'Saved' : 'Save'}
                            onClick={saveImage}
                            disabled={file ? true : false}
                            className=''
                        />

                        <input
                            type='button'
                            value='Retake'
                            onClick={() => {
                                setImageSrc('')
                                setFile(null)
                            }}
                        />
                    </div>
                </>}
        </>
    )
}