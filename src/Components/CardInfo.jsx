import { useSpring, animated } from 'react-spring'

import { CrossSvg } from './CrossSvg'

export const CardInfo = ({ closeCardInfo }) => {
  const spring = useSpring({ from: { scale: 0 }, to: [{ scale: 1.05 }, { scale: 1 }] })
  return (
    <div className='CardInfoWrapper'>
      <animated.div className='CardInfo' style={spring}>
        <div className='Cross' onClick={closeCardInfo}>
          <CrossSvg />
        </div>
      </animated.div>
    </div>
  )
}
