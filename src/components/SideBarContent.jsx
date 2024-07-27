import {useState} from 'react'
import {Box,Button,styled , List, ListItem} from '@mui/material'
import { CreateOutlined } from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';

const ComposeButton = styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`
const Container =styled(Box)({
  padding:9,
  '& > ul':{
    padding: '10px 0 0 5px',
    fontsize: 14,
    fontweight: 500,
    cursor:"pointer",
  },
  " & > a": {
    textdecoration: 'none',
    color:'inherit',
},
'& > a > li > svg': {
    marginright: 20,
}
})

const SidebarContent = () => {
  
  const [openDialog,setOpenDialog] = useState(false);
  
  const onComposeClick = () =>{
    setOpenDialog(true);
  }

  
  return (
    <Container>
     <ComposeButton onClick={() => onComposeClick()}>
      <CreateOutlined />Compose</ComposeButton>
      <List>
        {
          SIDEBAR_DATA.map(data => (
            <ListItem>
              <data.icon fontsize="small"/>{data.title}
            </ListItem>
          ))
        }
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  )
}

export default SidebarContent
