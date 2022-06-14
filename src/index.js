/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import UI from './modules/UI.js';
import EventListenerClass from './modules/EventLister.js';

UI.interface();
EventListenerClass.windowLoad();
EventListenerClass.submitTheForm();
EventListenerClass.refreshBTNFunc();