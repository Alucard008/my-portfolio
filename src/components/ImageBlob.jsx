import { Box } from '@mui/material';
import FadeInItem from './FadeInItem';

const ImageBlob = ({ size = { xs: 240, sm: 280, md: 320, lg: 360 } }) => {
  return (
    <FadeInItem delay={0.3}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: size,
            height: size,
            mx: 'auto',
          }}
        >
          <svg viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" style={{   height: '120%' }}>
            <mask id="blobMaskGhibli" mask-type="alpha">
              <path
                d="M9.2 146C34 76.6 115 54.7 184 29.5C246 7 312 -15 371 14.1C431 44 468 108 477 174C486 237 455 294 417 345C374 401 326 463 255 466C179 470 112 422 65.2 362C17.5 299.8 -17.2 219.6 9.2 146Z"
                fill="white"
              />
            </mask>
            <g mask="url(#blobMaskGhibli)">
              <path
                d="M9.2 146C34 76.6 115 54.7 184 29.5C246 7 312 -15 371 14.1C431 44 468 108 477 174C486 237 455 294 417 345C374 401 326 463 255 466C179 470 112 422 65.2 362C17.5 299.8 -17.2 219.6 9.2 146Z"
                fill="#E5E3DE"
              />
              <image x="0" y="0" width="500" height="500" href="/ghibli_pic.png" preserveAspectRatio="xMidYMid slice" />
            </g>
          </svg>
        </Box>
      </Box>
    </FadeInItem>
  );
};

export default ImageBlob;
