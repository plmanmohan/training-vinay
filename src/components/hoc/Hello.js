import WithMessage from './WithMessage';

const Hello = ({name}) => {
    return (
        <h1>Hello Component {name}</h1>
    );
}

export default WithMessage(Hello);