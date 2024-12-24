var tim = function()
{
    const nutThaTim = document.querySelector('.tha-tim');
    nutThaTim.addEventListener('click', () => {
    const timBayLen = document.createElement('div');
    timBayLen.className = 'tim-bay-len';
    document.body.appendChild(timBayLen);
    setTimeout(() => {
    timBayLen.remove();
    }, 4000);
    });
    const nutThaTimt = document.querySelector('.tha-tim');
    nutThaTimt.addEventListener('click', () => {
    const timBayLent = document.createElement('div');
    timBayLent.className = 'tim-bay-len-t';
    document.body.appendChild(timBayLent);
    setTimeout(() => {
    timBayLent.remove();
    }, 4000);
    });
    const nutThaTimlt = document.querySelector('.tha-tim');
    nutThaTimlt.addEventListener('click', () => {
    const timBayLenlt = document.createElement('div');
    timBayLenlt.className = 'tim-bay-len-lt';
    document.body.appendChild(timBayLenlt);
    setTimeout(() => {
    timBayLenlt.remove();
    }, 4000);
    });
    const nutThaTimrt = document.querySelector('.tha-tim');
    nutThaTimrt.addEventListener('click', () => {
    const timBayLenrt = document.createElement('div');
    timBayLenrt.className = 'tim-bay-len-rt';
    document.body.appendChild(timBayLenrt);
    setTimeout(() => {
    timBayLenrt.remove();
    }, 4000);
    });
    const nutThaTimm = document.querySelector('.tha-tim');
    nutThaTimm.addEventListener('click', () => {
    const timBayLenm = document.createElement('div');
    timBayLenm.className = 'tim-bay-lenm';
    document.body.appendChild(timBayLenm);
    setTimeout(() => {
    timBayLenm.remove();
    }, 4000);
    });
}

