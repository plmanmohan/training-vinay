const WithMessage = (Component) => {
    return function WrappedComponent(props) {
        return (
            <div>
                <h1>This is a Higher Order Component</h1>
                <Component {...props} />
            </div>
        )
    }
    
}

export default WithMessage;