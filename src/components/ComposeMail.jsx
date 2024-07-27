import React from 'react'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import { Close, DeleteOutlined } from '@mui/icons-material'

const dialogStyle = {
    height: '90%',
    width: '70%',
    maxWidth: '100%',
    maxHeight: '90%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontsize: '14px',
        fontweight: 500
    }
})

const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }`;

const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`

const ComposeMail = ({ openDialog, setOpenDialog }) => {

    const config = {
        Host: "smtp.elasticemail.com",
        Username: "aman12@yopmail.com",
        Password: "03CF0BCC6576103CFA70F36B54046C9A2216",
        Port: 2525
    }

    const closeComposeMail = (e) => {
        e.preventDefault();
        setOpenDialog(false);
    }

    const sendMail =  (e) => {
        e.preventDefault();
      
        if (window.Email) {
            window.Email.send({
                ...config,
                To : "amant1308208@gmail.com ",
                From : "amant1308208@gmail.com",
                Subject : "this is subject ",
                Body : "this is body"
            }).then(
                message => alert(message)
            );
        }
             

        setOpenDialog(false);
    }

    return (
        <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e)=>closeComposeMail(e)} />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder='Recipients' />
                <InputBase placeholder='Subject' />
            </RecipientWrapper>
            <TextField
                multiline
                rows={20}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
            />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
                <DeleteOutlined onClick={() => setOpenDialog(false)} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail
