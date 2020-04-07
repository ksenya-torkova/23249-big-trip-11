import {createHeaderInfoTemplate} from './components/header-info.js';
import {createHeaderCostTemplate} from './components/header-cost.js';
import {createHeaderControlsTemplate} from './components/header-controls.js';
import {createHeaderFiltersTemplate} from './components/header-filters.js';
import {createSortTemplate} from './components/sort.js';
import {createDaysTemplate} from './components/days.js';
import {createEventEditTemplate} from './components/event-edit.js';
import {createEventTemplate} from './components/event.js';

const EVENTS_AMOUNT = 3;

const headerInfo = document.querySelector(`.trip-main`);
const headerControls = headerInfo.querySelector(`.trip-main__trip-controls`);
const eventsContainer = document.querySelector(`.trip-events`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(headerInfo, createHeaderInfoTemplate(), `afterbegin`);

const headerCost = headerInfo.querySelector(`.trip-main__trip-info`);

render(headerCost, createHeaderCostTemplate());

render(headerControls, createHeaderControlsTemplate());
render(headerControls, createHeaderFiltersTemplate());

render(eventsContainer, createSortTemplate());

render(eventsContainer, createDaysTemplate());

const eventsList = eventsContainer.querySelector(`.trip-events__list`);

render(eventsList, createEventEditTemplate());

for (let i = 0; i < EVENTS_AMOUNT; i++) {
  render(eventsList, createEventTemplate());
}
