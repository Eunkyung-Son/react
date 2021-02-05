import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';

import { inject, observer } from 'mobx-react';

@inject('counterStore')
@observer
// provider로 제공되는 store들 중에서 CounterComponent를 사용할 수 있는 형태로 주입
// props로 주입
class CounterComponent extends Component {

    render() {

        const { counterStore } = this.props;
        // 이 props 안에는 counterStore가 주입되어 있기 때문에
        // 

        return (
            <div>
                <Button
                    onClick={() => counterStore.decreament()}
                    variant='contained' color='primary' size='large'> - </Button>

                <Box component='span' m={5}> {counterStore.count} </Box>

                <Button
                    onClick={() => counterStore.increament()}
                    variant='contained' color='primary' size='large'> + </Button>
            </div>
        )
    }
}

export default CounterComponent;
