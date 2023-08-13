import React from 'react'

const StyledIcon = ({ icon }) => {
    return (
        <div className="rounded-circle overflow-hidden" style={{
            borderRadius: '100%',
        }}>
            {React.cloneElement(icon, {
                height: '100px',
                width: '100px',
                style: { borderRadius: '20%' }
            })}
        </div>
    )
}

export default StyledIcon