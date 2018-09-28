(function() {
  interface Item {
    text: string;
    done: boolean;
  }

  const addItems = document.querySelector('.add-items') as HTMLFormElement;
  const itemsList = document.querySelector('.plates') as HTMLUListElement;
  const items: Item[] =
    JSON.parse(localStorage.getItem('items') as string) || [];

  function addItem(this: HTMLFormElement, e: Event): void {
    e.preventDefault();
    const text = (this.querySelector('[name=item]') as HTMLInputElement).value;
    const item = {
      text,
      done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function populateList(
    plates: Item[] = [],
    platesList: HTMLUListElement
  ): void {
    platesList.innerHTML = plates
      .map((plate, i) => {
        return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
          plate.done ? 'checked' : ''
        } />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
      })
      .join('');
  }

  function toggleDone(e: MouseEvent): void {
    const target = e.target as HTMLInputElement;

    if (!target.matches('input')) {
      return; // skip this unless it's an input
    }

    const el = target;
    const index = parseFloat(el.dataset.index as string);
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList);
})();
