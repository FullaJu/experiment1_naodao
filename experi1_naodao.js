/*********************** 
 * Experi1_Naodao Test *
 ***********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'experi1_naodao';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001', '性别': ['男', '女']};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trustworthyLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trustworthyLoopBegin(trustworthyLoopScheduler));
flowScheduler.add(trustworthyLoopScheduler);
flowScheduler.add(trustworthyLoopEnd);
const attractivenessLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(attractivenessLoopBegin(attractivenessLoopScheduler));
flowScheduler.add(attractivenessLoopScheduler);
flowScheduler.add(attractivenessLoopEnd);
const dominanceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(dominanceLoopBegin(dominanceLoopScheduler));
flowScheduler.add(dominanceLoopScheduler);
flowScheduler.add(dominanceLoopEnd);
const abilityLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(abilityLoopBegin(abilityLoopScheduler));
flowScheduler.add(abilityLoopScheduler);
flowScheduler.add(abilityLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/1-2-11.jpg', 'path': 'stimuli/1-2-11.jpg'},
    {'name': 'stimuli/1-4-8.jpg', 'path': 'stimuli/1-4-8.jpg'},
    {'name': 'stimuli/0-15-8.jpg', 'path': 'stimuli/0-15-8.jpg'},
    {'name': 'stimuli/0-18-7.jpg', 'path': 'stimuli/0-18-7.jpg'},
    {'name': 'stimuli/0-15-5.jpg', 'path': 'stimuli/0-15-5.jpg'},
    {'name': 'stimuli/1-8-11.jpg', 'path': 'stimuli/1-8-11.jpg'},
    {'name': 'stimuli/0-10-6.jpg', 'path': 'stimuli/0-10-6.jpg'},
    {'name': 'stimuli/1-8-10.jpg', 'path': 'stimuli/1-8-10.jpg'},
    {'name': 'stimuli/1-16-1.jpg', 'path': 'stimuli/1-16-1.jpg'},
    {'name': 'stimuli/0-18-3.jpg', 'path': 'stimuli/0-18-3.jpg'},
    {'name': 'stimuli/1-4-5.jpg', 'path': 'stimuli/1-4-5.jpg'},
    {'name': 'stimuli/0-15-11.jpg', 'path': 'stimuli/0-15-11.jpg'},
    {'name': 'stimuli/1-7-6.jpg', 'path': 'stimuli/1-7-6.jpg'},
    {'name': 'stimuli/1-8-8.jpg', 'path': 'stimuli/1-8-8.jpg'},
    {'name': 'stimuli/0-3-10.jpg', 'path': 'stimuli/0-3-10.jpg'},
    {'name': 'stimuli/1-16-8.jpg', 'path': 'stimuli/1-16-8.jpg'},
    {'name': 'stimuli/0-10-8.jpg', 'path': 'stimuli/0-10-8.jpg'},
    {'name': 'stimuli/1-2-9.jpg', 'path': 'stimuli/1-2-9.jpg'},
    {'name': 'stimuli/1-16-9.jpg', 'path': 'stimuli/1-16-9.jpg'},
    {'name': 'stimuli/attention_9.jpg', 'path': 'stimuli/attention_9.jpg'},
    {'name': 'stimuli/0-9-7.jpg', 'path': 'stimuli/0-9-7.jpg'},
    {'name': 'stimuli/0-9-5.jpg', 'path': 'stimuli/0-9-5.jpg'},
    {'name': 'stimuli/0-10-10.jpg', 'path': 'stimuli/0-10-10.jpg'},
    {'name': 'stimuli/1-7-5.jpg', 'path': 'stimuli/1-7-5.jpg'},
    {'name': 'stimuli/1-14-11.jpg', 'path': 'stimuli/1-14-11.jpg'},
    {'name': 'stimuli/0-3-6.jpg', 'path': 'stimuli/0-3-6.jpg'},
    {'name': 'stimuli/1-16-12.jpg', 'path': 'stimuli/1-16-12.jpg'},
    {'name': 'stimuli/0-10-5.jpg', 'path': 'stimuli/0-10-5.jpg'},
    {'name': 'stimuli/0-6-12.jpg', 'path': 'stimuli/0-6-12.jpg'},
    {'name': 'stimuli/0-6-9.jpg', 'path': 'stimuli/0-6-9.jpg'},
    {'name': 'stimuli/0-9-4.jpg', 'path': 'stimuli/0-9-4.jpg'},
    {'name': 'stimuli/1-2-2.jpg', 'path': 'stimuli/1-2-2.jpg'},
    {'name': 'stimuli/1-8-3.jpg', 'path': 'stimuli/1-8-3.jpg'},
    {'name': 'stimuli/0-15-1.jpg', 'path': 'stimuli/0-15-1.jpg'},
    {'name': 'stimuli/0-9-8.jpg', 'path': 'stimuli/0-9-8.jpg'},
    {'name': 'stimuli/1-4-12.jpg', 'path': 'stimuli/1-4-12.jpg'},
    {'name': 'stimuli/0-15-3.jpg', 'path': 'stimuli/0-15-3.jpg'},
    {'name': 'stimuli/1-2-8.jpg', 'path': 'stimuli/1-2-8.jpg'},
    {'name': 'stimuli/0-6-4.jpg', 'path': 'stimuli/0-6-4.jpg'},
    {'name': 'stimuli/0-6-5.jpg', 'path': 'stimuli/0-6-5.jpg'},
    {'name': 'stimuli/1-8-7.jpg', 'path': 'stimuli/1-8-7.jpg'},
    {'name': 'stimuli/0-3-12.jpg', 'path': 'stimuli/0-3-12.jpg'},
    {'name': 'stimuli/1-14-9.jpg', 'path': 'stimuli/1-14-9.jpg'},
    {'name': 'stimuli/1-16-2.jpg', 'path': 'stimuli/1-16-2.jpg'},
    {'name': 'stimuli/0-3-11.jpg', 'path': 'stimuli/0-3-11.jpg'},
    {'name': 'stimuli/1-7-2.jpg', 'path': 'stimuli/1-7-2.jpg'},
    {'name': 'stimuli/0-9-3.jpg', 'path': 'stimuli/0-9-3.jpg'},
    {'name': 'stimuli/0-6-1.jpg', 'path': 'stimuli/0-6-1.jpg'},
    {'name': 'stimuli/0-6-6.jpg', 'path': 'stimuli/0-6-6.jpg'},
    {'name': 'stimuli/0-15-2.jpg', 'path': 'stimuli/0-15-2.jpg'},
    {'name': 'stimuli/1-4-11.jpg', 'path': 'stimuli/1-4-11.jpg'},
    {'name': 'stimuli/1-7-3.jpg', 'path': 'stimuli/1-7-3.jpg'},
    {'name': 'stimuli/0-10-7.jpg', 'path': 'stimuli/0-10-7.jpg'},
    {'name': 'stimuli/0-18-8.jpg', 'path': 'stimuli/0-18-8.jpg'},
    {'name': 'stimuli/0-15-7.jpg', 'path': 'stimuli/0-15-7.jpg'},
    {'name': 'stimuli/0-18-2.jpg', 'path': 'stimuli/0-18-2.jpg'},
    {'name': 'stimuli/1-4-2.jpg', 'path': 'stimuli/1-4-2.jpg'},
    {'name': 'slider.jpg', 'path': 'slider.jpg'},
    {'name': 'stimuli/1-2-6.jpg', 'path': 'stimuli/1-2-6.jpg'},
    {'name': 'stimuli/1-16-6.jpg', 'path': 'stimuli/1-16-6.jpg'},
    {'name': 'stimuli/1-4-4.jpg', 'path': 'stimuli/1-4-4.jpg'},
    {'name': 'stimuli/0-10-2.jpg', 'path': 'stimuli/0-10-2.jpg'},
    {'name': 'stimuli/1-2-1.jpg', 'path': 'stimuli/1-2-1.jpg'},
    {'name': 'stimuli/1-7-7.jpg', 'path': 'stimuli/1-7-7.jpg'},
    {'name': 'stimuli/1-14-3.jpg', 'path': 'stimuli/1-14-3.jpg'},
    {'name': 'stimuli/1-7-11.jpg', 'path': 'stimuli/1-7-11.jpg'},
    {'name': 'stimuli/1-7-9.jpg', 'path': 'stimuli/1-7-9.jpg'},
    {'name': 'stimuli/1-14-4.jpg', 'path': 'stimuli/1-14-4.jpg'},
    {'name': 'stimuli/1-14-5.jpg', 'path': 'stimuli/1-14-5.jpg'},
    {'name': 'stimuli/1-8-5.jpg', 'path': 'stimuli/1-8-5.jpg'},
    {'name': 'stimuli/1-14-2.jpg', 'path': 'stimuli/1-14-2.jpg'},
    {'name': 'stimuli/0-9-2.jpg', 'path': 'stimuli/0-9-2.jpg'},
    {'name': 'stimuli/0-18-9.jpg', 'path': 'stimuli/0-18-9.jpg'},
    {'name': 'stimuli/0-3-4.jpg', 'path': 'stimuli/0-3-4.jpg'},
    {'name': 'stimuli/1-14-8.jpg', 'path': 'stimuli/1-14-8.jpg'},
    {'name': 'stimuli/0-18-6.jpg', 'path': 'stimuli/0-18-6.jpg'},
    {'name': 'instruction.png', 'path': 'instruction.png'},
    {'name': 'stimuli/1-14-12.jpg', 'path': 'stimuli/1-14-12.jpg'},
    {'name': 'stimuli/1-4-10.jpg', 'path': 'stimuli/1-4-10.jpg'},
    {'name': 'stimuli/0-9-9.jpg', 'path': 'stimuli/0-9-9.jpg'},
    {'name': 'stimuli/1-2-4.jpg', 'path': 'stimuli/1-2-4.jpg'},
    {'name': 'stimuli/0-3-1.jpg', 'path': 'stimuli/0-3-1.jpg'},
    {'name': 'stimuli/1-8-12.jpg', 'path': 'stimuli/1-8-12.jpg'},
    {'name': 'stimuli/1-4-6.jpg', 'path': 'stimuli/1-4-6.jpg'},
    {'name': 'stimuli/1-2-5.jpg', 'path': 'stimuli/1-2-5.jpg'},
    {'name': 'stimuli/0-3-7.jpg', 'path': 'stimuli/0-3-7.jpg'},
    {'name': 'stimuli/1-4-3.jpg', 'path': 'stimuli/1-4-3.jpg'},
    {'name': 'stimuli/0-10-11.jpg', 'path': 'stimuli/0-10-11.jpg'},
    {'name': 'stimuli/0-15-4.jpg', 'path': 'stimuli/0-15-4.jpg'},
    {'name': 'stimuli/1-2-10.jpg', 'path': 'stimuli/1-2-10.jpg'},
    {'name': 'stimuli/1-16-3.jpg', 'path': 'stimuli/1-16-3.jpg'},
    {'name': 'stimuli/1-8-1.jpg', 'path': 'stimuli/1-8-1.jpg'},
    {'name': 'stimuli/1-7-1.jpg', 'path': 'stimuli/1-7-1.jpg'},
    {'name': 'stimuli/1-8-2.jpg', 'path': 'stimuli/1-8-2.jpg'},
    {'name': 'stimuli/1-7-4.jpg', 'path': 'stimuli/1-7-4.jpg'},
    {'name': 'stimuli/0-18-10.jpg', 'path': 'stimuli/0-18-10.jpg'},
    {'name': 'stimuli/1-7-8.jpg', 'path': 'stimuli/1-7-8.jpg'},
    {'name': 'stimuli/1-16-5.jpg', 'path': 'stimuli/1-16-5.jpg'},
    {'name': 'stimuli/0-6-11.jpg', 'path': 'stimuli/0-6-11.jpg'},
    {'name': 'stimuli/1-14-6.jpg', 'path': 'stimuli/1-14-6.jpg'},
    {'name': 'stimuli/0-15-6.jpg', 'path': 'stimuli/0-15-6.jpg'},
    {'name': 'stimuli/1-2-7.jpg', 'path': 'stimuli/1-2-7.jpg'},
    {'name': 'stimuli/attention_1.jpg', 'path': 'stimuli/attention_1.jpg'},
    {'name': 'stimuli/1-8-4.jpg', 'path': 'stimuli/1-8-4.jpg'},
    {'name': 'stimuli/0-18-12.jpg', 'path': 'stimuli/0-18-12.jpg'},
    {'name': 'stimuli/0-3-5.jpg', 'path': 'stimuli/0-3-5.jpg'},
    {'name': 'stimuli/0-3-3.jpg', 'path': 'stimuli/0-3-3.jpg'},
    {'name': 'stimuli/1-14-1.jpg', 'path': 'stimuli/1-14-1.jpg'},
    {'name': 'stimuli/1-2-12.jpg', 'path': 'stimuli/1-2-12.jpg'},
    {'name': 'stimuli/0-9-10.jpg', 'path': 'stimuli/0-9-10.jpg'},
    {'name': 'stimuli/0-6-3.jpg', 'path': 'stimuli/0-6-3.jpg'},
    {'name': 'stimuli/0-6-8.jpg', 'path': 'stimuli/0-6-8.jpg'},
    {'name': 'stimuli/1-4-1.jpg', 'path': 'stimuli/1-4-1.jpg'},
    {'name': 'stimuli/0-10-1.jpg', 'path': 'stimuli/0-10-1.jpg'},
    {'name': 'stimuli/0-9-1.jpg', 'path': 'stimuli/0-9-1.jpg'},
    {'name': 'stimuli/0-6-2.jpg', 'path': 'stimuli/0-6-2.jpg'},
    {'name': 'stimuli/0-9-12.jpg', 'path': 'stimuli/0-9-12.jpg'},
    {'name': 'stimuli/0-15-9.jpg', 'path': 'stimuli/0-15-9.jpg'},
    {'name': 'stimuli/0-10-9.jpg', 'path': 'stimuli/0-10-9.jpg'},
    {'name': 'stimuli/1-16-11.jpg', 'path': 'stimuli/1-16-11.jpg'},
    {'name': 'stimuli/1-8-9.jpg', 'path': 'stimuli/1-8-9.jpg'},
    {'name': 'stimuli/0-10-3.jpg', 'path': 'stimuli/0-10-3.jpg'},
    {'name': 'stimuli/1-7-10.jpg', 'path': 'stimuli/1-7-10.jpg'},
    {'name': 'stimuli/0-3-2.jpg', 'path': 'stimuli/0-3-2.jpg'},
    {'name': 'stimuli/0-3-9.jpg', 'path': 'stimuli/0-3-9.jpg'},
    {'name': 'stimuli/1-16-10.jpg', 'path': 'stimuli/1-16-10.jpg'},
    {'name': 'stimuli/1-7-12.jpg', 'path': 'stimuli/1-7-12.jpg'},
    {'name': 'stimuli/1-16-4.jpg', 'path': 'stimuli/1-16-4.jpg'},
    {'name': 'stimuli/0-10-4.jpg', 'path': 'stimuli/0-10-4.jpg'},
    {'name': 'stimuli/1-4-7.jpg', 'path': 'stimuli/1-4-7.jpg'},
    {'name': 'stimuli/1-16-7.jpg', 'path': 'stimuli/1-16-7.jpg'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'stimuli/0-15-10.jpg', 'path': 'stimuli/0-15-10.jpg'},
    {'name': 'stimuli/0-18-5.jpg', 'path': 'stimuli/0-18-5.jpg'},
    {'name': 'stimuli/0-9-6.jpg', 'path': 'stimuli/0-9-6.jpg'},
    {'name': 'stimuli/0-10-12.jpg', 'path': 'stimuli/0-10-12.jpg'},
    {'name': 'stimuli/0-9-11.jpg', 'path': 'stimuli/0-9-11.jpg'},
    {'name': 'stimuli/0-15-12.jpg', 'path': 'stimuli/0-15-12.jpg'},
    {'name': 'stimuli/0-18-11.jpg', 'path': 'stimuli/0-18-11.jpg'},
    {'name': 'stimuli/0-3-8.jpg', 'path': 'stimuli/0-3-8.jpg'},
    {'name': 'stimuli/0-18-1.jpg', 'path': 'stimuli/0-18-1.jpg'},
    {'name': 'stimuli/0-6-10.jpg', 'path': 'stimuli/0-6-10.jpg'},
    {'name': 'stimuli/1-2-3.jpg', 'path': 'stimuli/1-2-3.jpg'},
    {'name': 'stimuli/1-4-9.jpg', 'path': 'stimuli/1-4-9.jpg'},
    {'name': 'stimuli/0-18-4.jpg', 'path': 'stimuli/0-18-4.jpg'},
    {'name': 'stimuli/1-14-7.jpg', 'path': 'stimuli/1-14-7.jpg'},
    {'name': 'stimuli/1-8-6.jpg', 'path': 'stimuli/1-8-6.jpg'},
    {'name': 'stimuli/1-14-10.jpg', 'path': 'stimuli/1-14-10.jpg'},
    {'name': 'stimuli/0-6-7.jpg', 'path': 'stimuli/0-6-7.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionClock;
var instru_key_resp;
var instruction_image;
var fixationClock;
var fixation_text;
var t_trialClock;
var t_image;
var dimension_text;
var cue_text;
var nine_text;
var one_text;
var tkey_resp;
var slider_image;
var at_trialClock;
var at_image;
var at_dimension;
var at_cue;
var at_nine;
var at_one;
var at_key_resp;
var at_slider_image;
var d_trialClock;
var $image;
var $dimension;
var $cue;
var $nine;
var $one;
var $key_resp;
var $slider_image;
var ab_trialClock;
var ab_image;
var ab_dimension;
var ab_cue;
var ab_nine;
var ab_one;
var ab_key_resp;
var ab_slider_image;
var endClock;
var end_text;
var en_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instru_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instruction_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruction_image', units : undefined, 
    image : 'instruction.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.51, 0.56],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_text',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "t_trial"
  t_trialClock = new util.Clock();
  t_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 't_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  dimension_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'dimension_text',
    text: '可信的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  cue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  nine_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'nine_text',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  one_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_text',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  tkey_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  slider_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slider_image', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "at_trial"
  at_trialClock = new util.Clock();
  at_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'at_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  at_dimension = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_dimension',
    text: '有吸引力的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  at_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_cue',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  at_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_nine',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  at_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_one',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  at_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  at_slider_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'at_slider_image', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "d_trial"
  d_trialClock = new util.Clock();
  $image = new visual.ImageStim({
    win : psychoJS.window,
    name : '$image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  $dimension = new visual.TextStim({
    win: psychoJS.window,
    name: '$dimension',
    text: '有支配性的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  $cue = new visual.TextStim({
    win: psychoJS.window,
    name: '$cue',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  $nine = new visual.TextStim({
    win: psychoJS.window,
    name: '$nine',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  $one = new visual.TextStim({
    win: psychoJS.window,
    name: '$one',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  $key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  $slider_image = new visual.ImageStim({
    win : psychoJS.window,
    name : '$slider_image', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "ab_trial"
  ab_trialClock = new util.Clock();
  ab_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ab_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.27, 0.37],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ab_dimension = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_dimension',
    text: '有能力的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  ab_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_cue',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  ab_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_nine',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  ab_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_one',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  ab_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ab_slider_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ab_slider_image', units : undefined, 
    image : 'slider.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.45)], size : [0.9, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '感谢您参与本次实验！请按空格键退出。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  en_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instru_key_resp_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru_key_resp.keys = undefined;
    instru_key_resp.rt = undefined;
    _instru_key_resp_allKeys = [];
    
    window.tReps = 0;
    window.atReps = 0;
    window.dReps = 0;
    window.abReps = 0;
    
    let random_value = Math.floor(Math.random() * 4);
    
    if (random_value === 0) {
        window.tReps = 1;
    } else if (random_value === 1) {
        window.atReps = 1;
    } else if (random_value === 2) {
        window.dReps = 1;
    } else if (random_value === 3) {
        window.abReps = 1;
    }
    
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instru_key_resp);
    instructionComponents.push(instruction_image);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction'-------
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru_key_resp* updates
    if (t >= 0.0 && instru_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_key_resp.tStart = t;  // (not accounting for frame time here)
      instru_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru_key_resp.clearEvents(); });
    }

    if (instru_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru_key_resp_allKeys = _instru_key_resp_allKeys.concat(theseKeys);
      if (_instru_key_resp_allKeys.length > 0) {
        instru_key_resp.keys = _instru_key_resp_allKeys[_instru_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instru_key_resp.rt = _instru_key_resp_allKeys[_instru_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instruction_image* updates
    if (t >= 0.0 && instruction_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_image.tStart = t;  // (not accounting for frame time here)
      instruction_image.frameNStart = frameN;  // exact frame index
      
      instruction_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction'-------
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instru_key_resp.keys', instru_key_resp.keys);
    if (typeof instru_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instru_key_resp.rt', instru_key_resp.rt);
        routineTimer.reset();
        }
    
    instru_key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trustworthy;
var currentLoop;
function trustworthyLoopBegin(trustworthyLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trustworthy = new TrialHandler({
      psychoJS: psychoJS,
      nReps: tReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trustworthy'
    });
    psychoJS.experiment.addLoop(trustworthy); // add the loop to the experiment
    currentLoop = trustworthy;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrustworthy of trustworthy) {
      const snapshot = trustworthy.getSnapshot();
      trustworthyLoopScheduler.add(importConditions(snapshot));
      trustworthyLoopScheduler.add(fixationRoutineBegin(snapshot));
      trustworthyLoopScheduler.add(fixationRoutineEachFrame());
      trustworthyLoopScheduler.add(fixationRoutineEnd());
      trustworthyLoopScheduler.add(t_trialRoutineBegin(snapshot));
      trustworthyLoopScheduler.add(t_trialRoutineEachFrame());
      trustworthyLoopScheduler.add(t_trialRoutineEnd());
      trustworthyLoopScheduler.add(endLoopIteration(trustworthyLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trustworthyLoopEnd() {
  psychoJS.experiment.removeLoop(trustworthy);

  return Scheduler.Event.NEXT;
}


var attractiveness;
function attractivenessLoopBegin(attractivenessLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    attractiveness = new TrialHandler({
      psychoJS: psychoJS,
      nReps: atReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'attractiveness'
    });
    psychoJS.experiment.addLoop(attractiveness); // add the loop to the experiment
    currentLoop = attractiveness;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAttractivenes of attractiveness) {
      const snapshot = attractiveness.getSnapshot();
      attractivenessLoopScheduler.add(importConditions(snapshot));
      attractivenessLoopScheduler.add(fixationRoutineBegin(snapshot));
      attractivenessLoopScheduler.add(fixationRoutineEachFrame());
      attractivenessLoopScheduler.add(fixationRoutineEnd());
      attractivenessLoopScheduler.add(at_trialRoutineBegin(snapshot));
      attractivenessLoopScheduler.add(at_trialRoutineEachFrame());
      attractivenessLoopScheduler.add(at_trialRoutineEnd());
      attractivenessLoopScheduler.add(endLoopIteration(attractivenessLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function attractivenessLoopEnd() {
  psychoJS.experiment.removeLoop(attractiveness);

  return Scheduler.Event.NEXT;
}


var dominance;
function dominanceLoopBegin(dominanceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    dominance = new TrialHandler({
      psychoJS: psychoJS,
      nReps: dReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'dominance'
    });
    psychoJS.experiment.addLoop(dominance); // add the loop to the experiment
    currentLoop = dominance;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDominance of dominance) {
      const snapshot = dominance.getSnapshot();
      dominanceLoopScheduler.add(importConditions(snapshot));
      dominanceLoopScheduler.add(fixationRoutineBegin(snapshot));
      dominanceLoopScheduler.add(fixationRoutineEachFrame());
      dominanceLoopScheduler.add(fixationRoutineEnd());
      dominanceLoopScheduler.add(d_trialRoutineBegin(snapshot));
      dominanceLoopScheduler.add(d_trialRoutineEachFrame());
      dominanceLoopScheduler.add(d_trialRoutineEnd());
      dominanceLoopScheduler.add(endLoopIteration(dominanceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function dominanceLoopEnd() {
  psychoJS.experiment.removeLoop(dominance);

  return Scheduler.Event.NEXT;
}


var ability;
function abilityLoopBegin(abilityLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ability = new TrialHandler({
      psychoJS: psychoJS,
      nReps: abReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'ability'
    });
    psychoJS.experiment.addLoop(ability); // add the loop to the experiment
    currentLoop = ability;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAbility of ability) {
      const snapshot = ability.getSnapshot();
      abilityLoopScheduler.add(importConditions(snapshot));
      abilityLoopScheduler.add(fixationRoutineBegin(snapshot));
      abilityLoopScheduler.add(fixationRoutineEachFrame());
      abilityLoopScheduler.add(fixationRoutineEnd());
      abilityLoopScheduler.add(ab_trialRoutineBegin(snapshot));
      abilityLoopScheduler.add(ab_trialRoutineEachFrame());
      abilityLoopScheduler.add(ab_trialRoutineEnd());
      abilityLoopScheduler.add(endLoopIteration(abilityLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function abilityLoopEnd() {
  psychoJS.experiment.removeLoop(ability);

  return Scheduler.Event.NEXT;
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation_text);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixation'-------
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_text* updates
    if (t >= 0.0 && fixation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_text.tStart = t;  // (not accounting for frame time here)
      fixation_text.frameNStart = frameN;  // exact frame index
      
      fixation_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd() {
  return async function () {
    //------Ending Routine 'fixation'-------
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _tkey_resp_allKeys;
var t_trialComponents;
function t_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 't_trial'-------
    t = 0;
    t_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    t_image.setImage(imageFile);
    cue_text.setText(cue);
    tkey_resp.keys = undefined;
    tkey_resp.rt = undefined;
    _tkey_resp_allKeys = [];
    // keep track of which components have finished
    t_trialComponents = [];
    t_trialComponents.push(t_image);
    t_trialComponents.push(dimension_text);
    t_trialComponents.push(cue_text);
    t_trialComponents.push(nine_text);
    t_trialComponents.push(one_text);
    t_trialComponents.push(tkey_resp);
    t_trialComponents.push(slider_image);
    
    for (const thisComponent of t_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function t_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 't_trial'-------
    // get current time
    t = t_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t_image* updates
    if (t >= 0.0 && t_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t_image.tStart = t;  // (not accounting for frame time here)
      t_image.frameNStart = frameN;  // exact frame index
      
      t_image.setAutoDraw(true);
    }

    
    // *dimension_text* updates
    if (t >= 0.0 && dimension_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dimension_text.tStart = t;  // (not accounting for frame time here)
      dimension_text.frameNStart = frameN;  // exact frame index
      
      dimension_text.setAutoDraw(true);
    }

    
    // *cue_text* updates
    if (t >= 0.0 && cue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text.tStart = t;  // (not accounting for frame time here)
      cue_text.frameNStart = frameN;  // exact frame index
      
      cue_text.setAutoDraw(true);
    }

    
    // *nine_text* updates
    if (t >= 0.0 && nine_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nine_text.tStart = t;  // (not accounting for frame time here)
      nine_text.frameNStart = frameN;  // exact frame index
      
      nine_text.setAutoDraw(true);
    }

    
    // *one_text* updates
    if (t >= 0.0 && one_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_text.tStart = t;  // (not accounting for frame time here)
      one_text.frameNStart = frameN;  // exact frame index
      
      one_text.setAutoDraw(true);
    }

    
    // *tkey_resp* updates
    if (t >= 0.0 && tkey_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tkey_resp.tStart = t;  // (not accounting for frame time here)
      tkey_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { tkey_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { tkey_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { tkey_resp.clearEvents(); });
    }

    if (tkey_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = tkey_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _tkey_resp_allKeys = _tkey_resp_allKeys.concat(theseKeys);
      if (_tkey_resp_allKeys.length > 0) {
        tkey_resp.keys = _tkey_resp_allKeys[_tkey_resp_allKeys.length - 1].name;  // just the last key pressed
        tkey_resp.rt = _tkey_resp_allKeys[_tkey_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *slider_image* updates
    if (t >= 0.0 && slider_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_image.tStart = t;  // (not accounting for frame time here)
      slider_image.frameNStart = frameN;  // exact frame index
      
      slider_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of t_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function t_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 't_trial'-------
    for (const thisComponent of t_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('tkey_resp.keys', tkey_resp.keys);
    if (typeof tkey_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('tkey_resp.rt', tkey_resp.rt);
        routineTimer.reset();
        }
    
    tkey_resp.stop();
    // the Routine "t_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _at_key_resp_allKeys;
var at_trialComponents;
function at_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'at_trial'-------
    t = 0;
    at_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    at_image.setImage(imageFile);
    at_cue.setText(cue);
    at_key_resp.keys = undefined;
    at_key_resp.rt = undefined;
    _at_key_resp_allKeys = [];
    // keep track of which components have finished
    at_trialComponents = [];
    at_trialComponents.push(at_image);
    at_trialComponents.push(at_dimension);
    at_trialComponents.push(at_cue);
    at_trialComponents.push(at_nine);
    at_trialComponents.push(at_one);
    at_trialComponents.push(at_key_resp);
    at_trialComponents.push(at_slider_image);
    
    for (const thisComponent of at_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function at_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'at_trial'-------
    // get current time
    t = at_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *at_image* updates
    if (t >= 0.0 && at_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_image.tStart = t;  // (not accounting for frame time here)
      at_image.frameNStart = frameN;  // exact frame index
      
      at_image.setAutoDraw(true);
    }

    
    // *at_dimension* updates
    if (t >= 0.0 && at_dimension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_dimension.tStart = t;  // (not accounting for frame time here)
      at_dimension.frameNStart = frameN;  // exact frame index
      
      at_dimension.setAutoDraw(true);
    }

    
    // *at_cue* updates
    if (t >= 0.0 && at_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_cue.tStart = t;  // (not accounting for frame time here)
      at_cue.frameNStart = frameN;  // exact frame index
      
      at_cue.setAutoDraw(true);
    }

    
    // *at_nine* updates
    if (t >= 0.0 && at_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_nine.tStart = t;  // (not accounting for frame time here)
      at_nine.frameNStart = frameN;  // exact frame index
      
      at_nine.setAutoDraw(true);
    }

    
    // *at_one* updates
    if (t >= 0.0 && at_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_one.tStart = t;  // (not accounting for frame time here)
      at_one.frameNStart = frameN;  // exact frame index
      
      at_one.setAutoDraw(true);
    }

    
    // *at_key_resp* updates
    if (t >= 0.0 && at_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_key_resp.tStart = t;  // (not accounting for frame time here)
      at_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { at_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { at_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { at_key_resp.clearEvents(); });
    }

    if (at_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = at_key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _at_key_resp_allKeys = _at_key_resp_allKeys.concat(theseKeys);
      if (_at_key_resp_allKeys.length > 0) {
        at_key_resp.keys = _at_key_resp_allKeys[_at_key_resp_allKeys.length - 1].name;  // just the last key pressed
        at_key_resp.rt = _at_key_resp_allKeys[_at_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *at_slider_image* updates
    if (t >= 0.0 && at_slider_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_slider_image.tStart = t;  // (not accounting for frame time here)
      at_slider_image.frameNStart = frameN;  // exact frame index
      
      at_slider_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of at_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function at_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'at_trial'-------
    for (const thisComponent of at_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('at_key_resp.keys', at_key_resp.keys);
    if (typeof at_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('at_key_resp.rt', at_key_resp.rt);
        routineTimer.reset();
        }
    
    at_key_resp.stop();
    // the Routine "at_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _$key_resp_allKeys;
var d_trialComponents;
function d_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'd_trial'-------
    t = 0;
    d_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    $image.setImage(imageFile);
    $cue.setText(cue);
    $key_resp.keys = undefined;
    $key_resp.rt = undefined;
    _$key_resp_allKeys = [];
    // keep track of which components have finished
    d_trialComponents = [];
    d_trialComponents.push($image);
    d_trialComponents.push($dimension);
    d_trialComponents.push($cue);
    d_trialComponents.push($nine);
    d_trialComponents.push($one);
    d_trialComponents.push($key_resp);
    d_trialComponents.push($slider_image);
    
    for (const thisComponent of d_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'd_trial'-------
    // get current time
    t = d_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *$image* updates
    if (t >= 0.0 && $image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $image.tStart = t;  // (not accounting for frame time here)
      $image.frameNStart = frameN;  // exact frame index
      
      $image.setAutoDraw(true);
    }

    
    // *$dimension* updates
    if (t >= 0.0 && $dimension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $dimension.tStart = t;  // (not accounting for frame time here)
      $dimension.frameNStart = frameN;  // exact frame index
      
      $dimension.setAutoDraw(true);
    }

    
    // *$cue* updates
    if (t >= 0.0 && $cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $cue.tStart = t;  // (not accounting for frame time here)
      $cue.frameNStart = frameN;  // exact frame index
      
      $cue.setAutoDraw(true);
    }

    
    // *$nine* updates
    if (t >= 0.0 && $nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $nine.tStart = t;  // (not accounting for frame time here)
      $nine.frameNStart = frameN;  // exact frame index
      
      $nine.setAutoDraw(true);
    }

    
    // *$one* updates
    if (t >= 0.0 && $one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $one.tStart = t;  // (not accounting for frame time here)
      $one.frameNStart = frameN;  // exact frame index
      
      $one.setAutoDraw(true);
    }

    
    // *$key_resp* updates
    if (t >= 0.0 && $key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $key_resp.tStart = t;  // (not accounting for frame time here)
      $key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { $key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { $key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { $key_resp.clearEvents(); });
    }

    if ($key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = $key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _$key_resp_allKeys = _$key_resp_allKeys.concat(theseKeys);
      if (_$key_resp_allKeys.length > 0) {
        $key_resp.keys = _$key_resp_allKeys[_$key_resp_allKeys.length - 1].name;  // just the last key pressed
        $key_resp.rt = _$key_resp_allKeys[_$key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *$slider_image* updates
    if (t >= 0.0 && $slider_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $slider_image.tStart = t;  // (not accounting for frame time here)
      $slider_image.frameNStart = frameN;  // exact frame index
      
      $slider_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'd_trial'-------
    for (const thisComponent of d_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('$key_resp.keys', $key_resp.keys);
    if (typeof $key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('$key_resp.rt', $key_resp.rt);
        routineTimer.reset();
        }
    
    $key_resp.stop();
    // the Routine "d_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ab_key_resp_allKeys;
var ab_trialComponents;
function ab_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ab_trial'-------
    t = 0;
    ab_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ab_image.setImage(imageFile);
    ab_cue.setText(cue);
    ab_key_resp.keys = undefined;
    ab_key_resp.rt = undefined;
    _ab_key_resp_allKeys = [];
    // keep track of which components have finished
    ab_trialComponents = [];
    ab_trialComponents.push(ab_image);
    ab_trialComponents.push(ab_dimension);
    ab_trialComponents.push(ab_cue);
    ab_trialComponents.push(ab_nine);
    ab_trialComponents.push(ab_one);
    ab_trialComponents.push(ab_key_resp);
    ab_trialComponents.push(ab_slider_image);
    
    for (const thisComponent of ab_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ab_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ab_trial'-------
    // get current time
    t = ab_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ab_image* updates
    if (t >= 0.0 && ab_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_image.tStart = t;  // (not accounting for frame time here)
      ab_image.frameNStart = frameN;  // exact frame index
      
      ab_image.setAutoDraw(true);
    }

    
    // *ab_dimension* updates
    if (t >= 0.0 && ab_dimension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_dimension.tStart = t;  // (not accounting for frame time here)
      ab_dimension.frameNStart = frameN;  // exact frame index
      
      ab_dimension.setAutoDraw(true);
    }

    
    // *ab_cue* updates
    if (t >= 0.0 && ab_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_cue.tStart = t;  // (not accounting for frame time here)
      ab_cue.frameNStart = frameN;  // exact frame index
      
      ab_cue.setAutoDraw(true);
    }

    
    // *ab_nine* updates
    if (t >= 0.0 && ab_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_nine.tStart = t;  // (not accounting for frame time here)
      ab_nine.frameNStart = frameN;  // exact frame index
      
      ab_nine.setAutoDraw(true);
    }

    
    // *ab_one* updates
    if (t >= 0.0 && ab_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_one.tStart = t;  // (not accounting for frame time here)
      ab_one.frameNStart = frameN;  // exact frame index
      
      ab_one.setAutoDraw(true);
    }

    
    // *ab_key_resp* updates
    if (t >= 0.0 && ab_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_key_resp.tStart = t;  // (not accounting for frame time here)
      ab_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ab_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ab_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ab_key_resp.clearEvents(); });
    }

    if (ab_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = ab_key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _ab_key_resp_allKeys = _ab_key_resp_allKeys.concat(theseKeys);
      if (_ab_key_resp_allKeys.length > 0) {
        ab_key_resp.keys = _ab_key_resp_allKeys[_ab_key_resp_allKeys.length - 1].name;  // just the last key pressed
        ab_key_resp.rt = _ab_key_resp_allKeys[_ab_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ab_slider_image* updates
    if (t >= 0.0 && ab_slider_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_slider_image.tStart = t;  // (not accounting for frame time here)
      ab_slider_image.frameNStart = frameN;  // exact frame index
      
      ab_slider_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ab_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ab_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'ab_trial'-------
    for (const thisComponent of ab_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ab_key_resp.keys', ab_key_resp.keys);
    if (typeof ab_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ab_key_resp.rt', ab_key_resp.rt);
        routineTimer.reset();
        }
    
    ab_key_resp.stop();
    // the Routine "ab_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _en_key_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    en_key_resp.keys = undefined;
    en_key_resp.rt = undefined;
    _en_key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(en_key_resp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *en_key_resp* updates
    if (t >= 0.0 && en_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      en_key_resp.tStart = t;  // (not accounting for frame time here)
      en_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { en_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { en_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { en_key_resp.clearEvents(); });
    }

    if (en_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = en_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _en_key_resp_allKeys = _en_key_resp_allKeys.concat(theseKeys);
      if (_en_key_resp_allKeys.length > 0) {
        en_key_resp.keys = _en_key_resp_allKeys[_en_key_resp_allKeys.length - 1].name;  // just the last key pressed
        en_key_resp.rt = _en_key_resp_allKeys[_en_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('en_key_resp.keys', en_key_resp.keys);
    if (typeof en_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('en_key_resp.rt', en_key_resp.rt);
        routineTimer.reset();
        }
    
    en_key_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
