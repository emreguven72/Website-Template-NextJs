import React from 'react'

const GoogleSheetTable = ({ url }: { url: string }) => {
    return (
        <div className="mx-auto w-11/12">
            <div className="bg-white shadow-lg rounded-lg overflow-x-scroll w-full">
                <iframe
                    src={url}
                    width="100%"
                    height="600px"
                    frameBorder="0"
                    allowFullScreen
                    title="Google Sheet"
                ></iframe>
            </div>

            {/* Spacer */}
            <div className="py-6"></div>
        </div>
    )
}

export default GoogleSheetTable