import { writable } from 'svelte/store';


let StoredState = false;

if (typeof window !== 'undefined') {
  StoredState = JSON.parse(localStorage.getItem('Navbar') || 'false');
}

const StateStore = writable(StoredState);

StateStore.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('Navbar', JSON.stringify(value));
  }
});

export default StateStore;
