export const choiceWeight = (val: string | undefined) => {
    switch (val) {
        case '400': {
            return 'Nunito';
        }
        case '500': {
            return 'Nunito-500';
        }
        case '600': {
            return 'Nunito-600';
        }
        case '700': {
            return 'Nunito-700';
        }
        case '800': {
            return 'Nunito-800';
        }
        case '900': {
            return 'Nunito-900';
        }
        default: {
            return 'Nunito';
        }
    }
};
