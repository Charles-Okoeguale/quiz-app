import { makeStyles } from "@mui/styles";
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { switchClasses } from '@mui/base/Switch';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '98%',
    height: '8%',
    margin: '0 auto',
    display: 'flex',
    paddingTop: '0.5em',
    justifyContent: 'space-between',
    alignItems: 'center',
    "& .MuiTypography-h5": {
      color: theme.palette.mode === 'dark' ? 'white' : 'black',
      [theme.breakpoints.down('md')]: {
        fontSize: '1em'
      },
    }
 },
}));

const blue = {
   50: '#F0F7FF',
   100: '#C2E0FF',
   200: '#99CCF3',
   300: '#66B2FF',
   400: '#3399FF',
   500: '#007FFF',
   600: '#0072E6',
   700: '#0059B3',
   800: '#004C99',
   900: '#4CBB17',
 };
 
 const grey = {
   50: '#F3F6F9',
   100: '#E5EAF2',
   200: '#DAE2ED',
   300: '#C7D0DD',
   400: '#B0B8C4',
   500: '#9DA8B7',
   600: '#6B7A90',
   700: '#434D5B',
   800: '#303740',
   900: '#1C2025',
 };

 export const Root = styled('span')(
  ({ theme }) => `
  box-sizing: border-box;
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 25px;
  cursor: pointer;

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    box-sizing: border-box;
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 24px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    box-shadow: inset 0px 1px 1px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'
    };
  }

  &:hover .${switchClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${switchClasses.focusVisible} .${switchClasses.track} {
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  & .${switchClasses.thumb} {
    box-sizing: border-box;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #FFF;
    position: relative;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    box-shadow: 0px 1px 2px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)'
    };
  }

  &.${switchClasses.checked} {
    .${switchClasses.thumb} {
      left: 18px;
      background-color: #fff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .${switchClasses.track} {
      border: none;
      background: ${blue[900]};
    }
  }

  &:hover .${switchClasses.checked} .${switchClasses.track} {
    background: ${blue[700]};
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
);


export const Listbox = styled('ul')(
   ({ theme }) => `
   font-family: 'IBM Plex Sans', sans-serif;
   font-size: 0.875rem;
   box-sizing: border-box;
   padding: 6px;
   margin: 12px 0;
   min-width: 200px;
   border-radius: 12px;
   overflow: auto;
   outline: 0px;
   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
   box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
   z-index: 1;
   `,
 );

 export const MenuItem = styled(BaseMenuItem)(
   ({ theme }) => `
   list-style: none;
   padding: 8px;
   border-radius: 8px;
   cursor: default;
   user-select: none;
 
   &:last-of-type {
     border-bottom: none;
   }
 
  
 
   &.${menuItemClasses.disabled} {
     color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
   }
   `,
 );
 
 export const MenuButton = styled(BaseMenuButton)(
   ({ theme }) => `
   font-family: 'IBM Plex Sans', sans-serif;
   font-weight: 600;
   font-size: 0.875rem;
   line-height: 1.5;
   padding: 8px 16px;
   border-radius: 8px;
   transition: all 150ms ease;
   cursor: pointer;
   border: 1px solid ${theme.palette.mode === 'dark' ? 'whitesmoke' : 'whitesmoke'};
   color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
   `,
 );
 