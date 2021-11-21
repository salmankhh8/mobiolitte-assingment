import './App.css';
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useState } from 'react'
import SaveIcon from '@material-ui/icons/Save'
import { Dialog,Button, DialogActions, Box, Typography, TextField } from '@material-ui/core'
import { ButtonGroup} from '@material-ui/core'
import ing1 from './assets/logo.png'
import SendIcon from '@material-ui/icons/Send'
import Publish from '@material-ui/icons/Publish'
function App() {
  // const [isOpen, setIsOpen]=useState(false)
  const [showDialog, setShowDialog]=useState(false)
  const OpenDialog=()=>setShowDialog(true)
  
  return (
    <div className="App"> 
      <header className="App-header">
      <ButtonGroup>
      <Button
      size='large'
      color='primary'
       variant="contained"
       style={{
          fontSize:20  
          }}  
      startIcon={<SaveIcon />}
      onClick={OpenDialog}>
        Create Collections
      </Button>
        <Dialog open={showDialog}>
        <Box width="400px" textAlign="center" p={2}>
        <img src={ing1}width='200px' alt='logo'></img>
        <Typography style={{margin:0, padding:0}}>
          <h2>Collections</h2>
        </Typography>
        <Typography varient='caption' color='textSecondary'>
          Fill the details and upload the image...
        </Typography>
        <h4>Title</h4>
        <TextField varient='outlined' fullWidth margin='dense'
         placeholder="Title of Collection" ></TextField>
        <Button variant="contained" color="secondary"
        startIcon={<Publish />}
        inputType="file"
        style={{display:'flex', margin: '12px'}}>
        Upload</Button> 
        <h4>Name of Company </h4>
        <TextField varient='outlined' fullWidth margin='dense'
         placeholder="company name"></TextField>
        <h4>Descriptoin of Collection</h4>
        <TextField varient='outlined' fullWidth margin='dense'
         placeholder='description' ></TextField>
        <DialogActions> 
     
        <Button variant="contained" color="primary"
        style={{display:'flex',width:'120px', marginTop: '20px', marginRight:'20px'}}
        startIcon={<SendIcon/>}>
        Send</Button> 
        
        <Button variant="contained"
        style={{display:'left', marginRight:'125px',marginTop: '20px'}}
        color='error'
        onClick={()=>setShowDialog(false)}
        endIcon={<DeleteIcon />}
        >Cancel</Button>
        </DialogActions>
        </Box>
         </Dialog>
      </ButtonGroup>

      </header>
    </div>
  );
}
 
export default App ;
