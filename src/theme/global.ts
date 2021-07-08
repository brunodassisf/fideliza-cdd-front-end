import Box from '@material-ui/core/Box';
import { createTheme, withStyles } from '@material-ui/core/styles';
import { Nunito, Nunito600, Nunito700, Nunito800, Nunito900 } from './font';

const primaryMain = '#e07a5f';
const primaryText = '#f4f1de';

const secondaryMain = '#81b29a';
const secondaryText = '#f2cc8f';

export const Root = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
})(Box);

export default createTheme({
    palette: {
        primary: {
            main: primaryMain,
            contrastText: primaryText,
        },
        secondary: {
            main: secondaryMain,
            contrastText: secondaryText,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    Nunito,
                    Nunito600,
                    Nunito700,
                    Nunito800,
                    Nunito900,
                ],
            },
        },
    },
});
