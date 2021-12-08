import './style.css';

import { of, map, Observable, from, scan } from 'rxjs';

const source = from([1, 2, 3, 4, 1, 3, 5, 4]);

// ทำยังไงให้ Observable ปล่อยค่า ผลรวมค่าใน array เช่น
// ใช้ pipe operator อะไรก็ได้

// คำตอบคือต้อง console.log ค่าปล่อยค่า 1--3--6--10--11--12--15--20--24

let scanObservable = source.pipe(
  scan((total, res) => {
    return (total += res);
  }, 0)
);

scanObservable.subscribe((res) => console.log(res));
