import React from "react";
import Component from "mson-react/lib/component";
import FormRequestCreation from './components/SimpleForm'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  render(){
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Request Creation
        </Button>
        <Dialog
          fullWidth={true}
          maxWidth='md'
          open={this.state.open}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Request Creation</DialogTitle>
          <DialogContent>
            <Component
              definition={FormRequestCreation(this.handleClose)}
              onMount={({ component })=>{
  
              }}
              onSubmit={({ component }) => {
                alert(JSON.stringify(component.getValues()));
              }}
              onCancel={()=>{
                this.handleClose()
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
  
  handleClickOpen(){
    this.setState({
      open: true
    })
  }

  handleClose(){
    this.setState({
      open:false
    })
  }

  componentDidMount(){
    
  }
}

