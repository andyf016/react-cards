import React from 'react';
import Card from './cards/Card';
import CardGroup from './cardGroup/CardGroup';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */




const App = () => (
    <CardGroup>
        <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
        <Card description="Basic tier" hint = "most popular" icon = "fa-trophy" price = "$10.00" />
        <Card description="Advanced tier" hint = "only for enterprise-level professionals" icon = "fa-bolt" price = "$6,000" />
    </CardGroup> 
);

export default App;
