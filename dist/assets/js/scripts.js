"use strict";

(function () {
  var parent = document.querySelector(".survey");
  if (!parent) return;
  var form = parent.querySelector(".survey__form");
  var result = parent.querySelector(".survey__result");
  var options = parent.querySelectorAll(".survey__form-input");
  var surveyProgress = parent.querySelector(".survey__progress");
  var btn = parent.querySelector(".survey__btn");
  var surveyFormTitle = parent.querySelector(".survey__form-title span");
  var surveyFormDesc = parent.querySelector(".survey__form-desc");
  var surveyResultCount = parent.querySelector(".survey__result-count span");
  var surveyResultCountText = parent.querySelector(".survey__result-count-text");
  var surveyResultDesc = parent.querySelector(".survey__result-desc");
  var activeItem = 0;
  var disabledBtn = true;
  var store = [{
    id: 1,
    question: "Я работаю с большим напряжением",
    unswear: null
  }, {
    id: 2,
    question: "Мне трудно сосредоточиться на чем-либо",
    unswear: null
  }, {
    id: 3,
    question: "Моя половая жизнь не удовлетворяет меня",
    unswear: null
  }, {
    id: 4,
    question: "Ожидание нервирует меня",
    unswear: null
  }, {
    id: 5,
    question: "Я испытываю мышечную слабость",
    unswear: null
  }, {
    id: 6,
    question: "Мне не хочется ходить в кино или в театр",
    unswear: null
  }, {
    id: 7,
    question: "Я забывчив",
    unswear: null
  }, {
    id: 8,
    question: "Я чувствую себя усталым",
    unswear: null
  }, {
    id: 9,
    question: "Мои глаза устают при длительном чтении",
    unswear: null
  }, {
    id: 10,
    question: "Мои руки дрожат",
    unswear: null
  }, {
    id: 11,
    question: "У меня плохой аппетит",
    unswear: null
  }, {
    id: 12,
    question: "Мне трудно быть на вечеринке или в шумной компании",
    unswear: null
  }, {
    id: 13,
    question: "Я уже не так хорошо понимаю прочитанное",
    unswear: null
  }, {
    id: 14,
    question: "Мои руки и ноги холодные",
    unswear: null
  }, {
    id: 15,
    question: "Меня легко задеть",
    unswear: null
  }, {
    id: 16,
    question: "У меня болит голова",
    unswear: null
  }, {
    id: 17,
    question: "Я просыпаюсь утром усталым и не отдохнувшим",
    unswear: null
  }, {
    id: 18,
    question: "У меня бывают головокружения",
    unswear: null
  }, {
    id: 19,
    question: "У меня бывают подергивания мышц",
    unswear: null
  }, {
    id: 20,
    question: "У меня шумит в ушах",
    unswear: null
  }, {
    id: 21,
    question: "Меня беспокоят половые вопросы",
    unswear: null
  }, {
    id: 22,
    question: "Я испытываю тяжесть в голове",
    unswear: null
  }, {
    id: 23,
    question: "Я испытываю общую слабость",
    unswear: null
  }, {
    id: 24,
    question: "Я испытываю боли в темени",
    unswear: null
  }, {
    id: 25,
    question: "Жизнь для меня связана с напряжением",
    unswear: null
  }, {
    id: 26,
    question: "Моя голова как бы стянута обручем",
    unswear: null
  }, {
    id: 27,
    question: "Я легко просыпаюсь от шума",
    unswear: null
  }, {
    id: 28,
    question: "Меня утомляют люди",
    unswear: null
  }, {
    id: 29,
    question: "Когда я волнуюсь, то покрываюсь потом",
    unswear: null
  }, {
    id: 30,
    question: "Мне не дают заснуть беспокойные мысли",
    unswear: null
  }];
  var resStore = ["Поздравляем, Вы в ресурсе! У Вас нет симптомов астении. Однако для мониторинга своего состояния и своевременного выявления симптомов хронической усталости (астении), время от времени проходите данный тест. А также следите за выпусками «Долго, счастливо, осознано» и Вы узнаете как всегда оставаться в тонусе и все успевать!", "У Вас наблюдается слабо выраженные симптомы астении (хронической усталости). Устраните те виды деятельности, которые вызывают сильное эмоциональное напряжение, и старайтесь не перегружать свой день слишком большим количеством дел. А также, следите за выпусками «Долго, счастливо, осознано» и Вы узнаете, как победить симптомы астении и вернуть работоспособность!", "У Вас умеренно выраженная астения (хроническая усталость). Возьмите отпуск. Найдите баланс между работой и отдыхом. Если не будет улучшения самочувствия, обратитесь к специалистам. Для мониторинга астении (хронической усталости), время от времени проходите данный тест. А также, следите за выпусками «Долго, счастливо, осознано» и Вы узнаете, как победить симптомы астении и вернуть работоспособность!", "У Вас значительно выраженные симптомы астении (хронической усталости). Незамедлительно обратиться к своему лечащему врачу. Для мониторинга астении (хронической усталости), время от времени проходите данный тест. А также, следите за выпусками «Долго, счастливо, осознано» и Вы узнаете, как победить симптомы астении и вернуть работоспособность!"];
  createItemsProgress(store.length);
  var progressItems = parent.querySelectorAll(".survey__progress-item");
  initSurvey();
  options.forEach(function (element) {
    element.addEventListener("click", function (e) {
      offAllOptions(options);
      element.checked = true;
      store[activeItem].unswear = Number(element.name);
      unlockBtn();
      console.log(store);
    });
  });
  function initSurvey() {
    addActiveClass(progressItems[activeItem]);
    btn.addEventListener("click", saveUnswear);
    changeQuestion();
    addActiveClass(form);
  }
  function changeQuestion() {
    surveyFormTitle.innerHTML = store[activeItem].id;
    surveyFormDesc.innerHTML = store[activeItem].question;
  }
  function saveUnswear() {
    if (disabledBtn) return;
    if (activeItem !== store.length - 1) {
      lockBtn();
      removeActiveClass(progressItems[activeItem]);
      offAllOptions(options);
      activeItem++;
      changeQuestion();
      addActiveClass(progressItems[activeItem]);
    } else {
      removeActiveClass(progressItems[activeItem]);
      offAllOptions(options);
      activeItem++;
      lockBtn();
      showResult();
      getResultCount();
    }
  }
  function showResult() {
    var countRes = getResultCount();
    var textCount = ["Балл", "Балла", "Баллов"];
    removeActiveClass(form);
    addActiveClass(result);
    surveyResultCount.innerHTML = countRes;
    surveyResultCountText.innerHTML = String(declOfNum(countRes, textCount));
    selectResultDesc(countRes);
  }
  function selectResultDesc(count) {
    if (count <= 50) {
      surveyResultDesc.innerHTML = resStore[0];
    }
    if (51 <= count && count <= 75) {
      surveyResultDesc.innerHTML = resStore[1];
    }
    if (76 <= count && count <= 100) {
      surveyResultDesc.innerHTML = resStore[2];
    }
    if (count >= 101) {
      surveyResultDesc.innerHTML = resStore[3];
    }
  }
  function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  }
  function getResultCount() {
    var resultCount = 0;
    store.forEach(function (el) {
      resultCount += el.unswear;
    });
    return resultCount;
  }
  function createItemsProgress(count) {
    for (var i = 0; i < count; i++) {
      var elem = "\n            <div class=\"survey__progress-item\"><span>".concat(i + 1, "</span></div>\n            ");
      surveyProgress.insertAdjacentHTML("beforeend", elem);
    }
  }
  function addActiveClass(elem) {
    elem.classList.add("active");
  }
  function removeActiveClass(elem) {
    elem.classList.remove("active");
    elem.classList.add("closed");
  }
  function lockBtn() {
    if (!btn.classList.contains("disabled")) {
      btn.classList.add("disabled");
      disabledBtn = true;
    }
  }
  function unlockBtn() {
    if (btn.classList.contains("disabled")) {
      btn.classList.remove("disabled");
      disabledBtn = false;
    }
  }
  function offAllOptions(arr) {
    arr.forEach(function (element) {
      element.checked = false;
    });
  }
})();