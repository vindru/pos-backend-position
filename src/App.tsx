import './App.css';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import POSPage from './pages/pos-page';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid>
            <Grid item>
              <Typography variant="h6">Pizza POS</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Router>
          <Routes>
            <Route path="/" element={<POSPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
