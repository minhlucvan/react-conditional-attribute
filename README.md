# react-conditional-attribute


```javascript 

import atrr from 'react-conditional-attribute';

<div value={attr(isActive, 'vvh')}>hello world</div>
<div value={attr(isActive, 'vvh', 'djsabdjak')}>hello world</div>
<div value={attr({cond: isActive, val:'one'}, {cond: !isActive, val:'other'}, {val: 'another'})}>hello world</div>


```