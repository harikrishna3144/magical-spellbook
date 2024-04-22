import React, {useState} from 'react'
import './App.css'

function MagicWand() {
    const [showWand, setShowWand] = useState(false);

    const toggleWand = () => {
        setShowWand(!showWand);
    };

  return (
    <div>
        <button className='wand-button' onClick={toggleWand}>
            {showWand ? 'Hide Wand ✨' : 'Show Wand ✨'}
        </button>
        {showWand && (
            <div className='wand'>
                <h2>Magic Wand</h2>
                <p>Point the wand to unleash magical powers!</p> 
            </div>
        )}
    </div>
  )
}

export default MagicWand;