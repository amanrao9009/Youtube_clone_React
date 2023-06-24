import React from 'react'
import { Stack , Box } from '@mui/material'
import {VideoCard , ChannelCard} from './'

const Videos = ({videos , direction}) => {
  // console.log(videos)
  if(!videos?.length) return "Loading..."
  return (
    <Stack className='aman' direction={ direction || "row"} flexWrap='wrap'  justifyContent={{md:'space-evenly', sm:'center'}} gap={3}>
    
      {
             

        videos.map((item , idx)=>{

          

        return ( <Box   key={idx}>
            
            {/* {console.log(item)} */}
             
            
             {item.id.videoId && <VideoCard video={item}/>}
             {item.id.channelId && <ChannelCard channelDetail={item}/>} 
            
            
          </Box>
          
          )
        })
        
      }

    </Stack>
  )
}

export default Videos