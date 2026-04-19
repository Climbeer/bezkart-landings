"use client";

import { useState } from "react";

const BRAND_NAME = "БезКарт";
const REFERRAL_LINK = "https://t.me/BezKartDemoBot?start=119254835";
const HERO_SCREEN = "/deliverables/assets/1.webp";
const FLOW_SCREEN = "/deliverables/assets/2.png.webp";

const painPoints = [
  {
    title: "Гости перестают возвращаться незаметно",
    text: "Человек просто выпадает из привычки, а кофейня узнает об этом слишком поздно, когда возвращать уже сложнее.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
        <rect x="7" y="13" width="24" height="18" rx="6" className="fill-white/90 stroke-[#b99072]" strokeWidth="2" />
        <path d="M34 16h5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H21" className="stroke-[#6f4c37]" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 22h12M13 26h8" className="stroke-[#d8b9a0]" strokeWidth="2" strokeLinecap="round" />
        <path d="m34 10 4 4m0-4-4 4" className="stroke-[#c45845]" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Непонятно, кого вы уже потеряли",
    text: "Без истории визитов не видно, кто был постоянным гостем, а потом внезапно исчез из повторных покупок.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
        <rect x="9" y="10" width="14" height="24" rx="5" className="fill-white/90 stroke-[#b99072]" strokeWidth="2" />
        <rect x="25" y="15" width="14" height="19" rx="5" className="fill-[#fff8f1] stroke-[#d8b9a0]" strokeWidth="2" />
        <path d="M16 17v10M30 21h4M30 26h4" className="stroke-[#6f4c37]" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 39c2.5-2 4.8-3 7-3s4.5 1 7 3" className="stroke-[#c45845]" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Нельзя вернуть тех, кто пропал",
    text: "Если у вас нет базы гостей и контакта через Telegram, то напомнить о себе тем, кто перестал ходить, просто некуда.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
        <circle cx="19" cy="20" r="8" className="fill-white/90 stroke-[#b99072]" strokeWidth="2" />
        <path d="M13 35c1.8-3.7 5.2-6 9-6s7.2 2.3 9 6" className="stroke-[#6f4c37]" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 16h7m-3.5-3.5V19" className="stroke-[#3d7f5f]" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M31 27h10" className="stroke-[#d8b9a0]" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Гость подключается по QR-коду",
    text: "Без анкеты, без отдельного приложения и без сложной регистрации.",
  },
  {
    title: "Визиты и база гостей сохраняются в Telegram",
    text: "История не теряется, и вы не работаете вслепую, когда речь идет о повторных визитах.",
  },
  {
    title: "Вы видите повторность и пропавших гостей",
    text: "Становится понятно, кто ходит регулярно, а кто уже выпал и кому пора отдельно напомнить о себе.",
  },
  {
    title: "Можно возвращать гостей через Telegram",
    text: "Лояльность начинает работать не только на бонусы, но и на возврат тех, кто перестал приходить.",
  },
];

const benefits = [
  "видно, кто стал постоянным гостем",
  "видно, кто перестал приходить",
  "можно напомнить о себе через Telegram",
  "база гостей не теряется",
  "возвраты становятся управляемыми",
  "лояльность работает не только на бонусы, но и на удержание",
];

const faqs = [
  {
    question: "Как понять, кто перестал ходить?",
    answer: "БезКарт сохраняет историю взаимодействий в Telegram, поэтому становится видно, кто возвращается регулярно, а кто выпал из повторных визитов.",
  },
  {
    question: "Нужно ли отдельное приложение?",
    answer: "Нет. Все работает через Telegram, поэтому гостю не нужно устанавливать что-то отдельно.",
  },
  {
    question: "Можно ли использовать это без маркетолога?",
    answer: "Да. Идея как раз в том, чтобы у кофейни был простой и понятный инструмент для удержания гостей без сложной настройки и отдельной команды.",
  },
  {
    question: "Подходит ли это для одной или нескольких точек?",
    answer: "Да. Такой формат подходит и для одной кофейни, и для сети из нескольких точек, когда нужно видеть повторность и не терять гостей незаметно.",
  },
  {
    question: "Сложно ли подключить гостей?",
    answer: "Нет. Гость просто переходит по QR-коду в Telegram, после чего визиты и бонусы начинают фиксироваться без лишних действий.",
  },
  {
    question: "Что это дает кроме бонусов?",
    answer: "Вы получаете не только механику поощрения, но и понятный инструмент удержания: видно, кто стал постоянным гостем, кто пропал и кого можно вернуть.",
  },
];

function TelegramLoyaltyLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(121,136,255,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(79,99,255,0.2),_transparent_30%),linear-gradient(180deg,_#171a46_0%,_#20245d_48%,_#191d4f_100%)] text-[#2f241d]">
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108671592', 'ym');
ym(108671592, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`,
        }}
      />
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/108671592" style={{ position: "absolute", left: "-9999px" }} alt="" />
        </div>
      </noscript>
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(121,136,255,0.18),_transparent_36%)]" />

      <section className="px-4 pb-14 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-8 flex items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_12px_40px_rgba(88,58,34,0.08)] backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#2d2f85] px-4 py-2.5 shadow-[0_14px_34px_rgba(45,47,133,0.18)]">
                <p className="text-lg font-semibold tracking-[-0.04em] sm:text-xl">
                  <span className="text-[#6477ff]">Без</span>
                  <span className="text-white">Карт</span>
                </p>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">{BRAND_NAME}</p>
                <p className="text-sm text-[#d6dafd]">Цифровая лояльность для coffee-to-go кофеен</p>
              </div>
            </div>
            <a
              href={REFERRAL_LINK}
              className="hidden rounded-full bg-[#4f63ff] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3f54f5] md:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Посмотреть демо БезКарт
            </a>
          </header>

          <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#eef1ff] shadow-sm backdrop-blur">
                Для кофеен, которые хотят видеть, кто перестал возвращаться
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Видьте, кто перестал возвращаться, и возвращайте гостей через БезКарт
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#e3e7ff] sm:text-xl">
                БезКарт помогает не просто копить бонусы, а видеть поведение гостей: кто возвращается, кто перестал
                ходить и кому уже пора напомнить о себе через Telegram.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3">
                <a
                  href={REFERRAL_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-[#4f63ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(79,99,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#3f54f5]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Посмотреть демо БезКарт
                </a>
                <p className="text-sm text-[#d6dafd]">Демо БезКарт в Telegram</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-[#ead1bd]/60 blur-3xl" />
              <div className="absolute -bottom-2 right-8 h-32 w-32 rounded-full bg-[rgba(79,99,255,0.25)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/80 p-5 shadow-[0_30px_80px_rgba(88,58,34,0.12)] backdrop-blur sm:p-6">
                <div className="grid gap-4 sm:grid-cols-[0.88fr_1.12fr]">
                  <div className="rounded-[1.5rem] border border-[#f0e2d6] bg-[#fffaf5] p-4">
                    <p className="text-sm font-semibold text-[#9a7458]">Было</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#3a2a20]">Гости пропадают незаметно</h2>
                    <div className="mt-4 rounded-[1.25rem] border border-dashed border-[#d8b9a0] bg-white p-4">
                      <div className="mb-3 flex items-center justify-between text-sm text-[#6d5b4f]">
                        <span>Пропавшие гости</span>
                        <span>непонятно</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <div
                            key={index}
                            className={`flex h-12 items-center justify-center rounded-2xl border text-sm font-semibold ${
                              index < 4
                                ? "border-[#c89463] bg-[#f7ebe0] text-[#7d5538]"
                                : "border-[#ead8ca] bg-[#fffaf5] text-[#c1aa97]"
                            }`}
                          >
                            {index < 4 ? "☕" : "•"}
                          </div>
                        ))}
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-[#7a6658]">
                      <li>Гость перестал ходить, а вы этого не замечаете</li>
                      <li>Непонятно, кто уже выпал из повторных визитов</li>
                      <li>Нет контакта и нельзя напомнить о себе</li>
                      <li>Повторные продажи уходят незаметно</li>
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,_#2d2f85_0%,_#23245e_100%)] p-4 text-[#fff7f0]">
                    <p className="text-sm font-semibold text-[#dfe4ff]">Стало</p>
                    <div className="mt-3 rounded-[1.6rem] bg-[rgba(255,255,255,0.12)] p-4 text-white shadow-inner">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4f63ff] text-sm font-bold text-white">
                          ТГ
                        </div>
                        <div>
                          <p className="text-sm text-[#dfe4ff]">Интерфейс БезКарт в Telegram</p>
                          <p className="font-semibold">Реальный экран бота для возврата гостей</p>
                        </div>
                      </div>

                      <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,_#dfe4ff_0%,_#f4f6ff_100%)] p-3 shadow-[0_18px_45px_rgba(18,27,92,0.28)]">
                        <div className="mx-auto max-w-[15rem] overflow-hidden rounded-[1.9rem] border-4 border-[#131522] bg-[#131522] shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                          <img src={HERO_SCREEN} alt="Скрин бота БезКарт для гостя" className="block h-auto w-full" />
                        </div>
                      </div>
                        <div className="mt-4 grid gap-2 text-sm text-white/90">
                        <div className="rounded-2xl bg-white/10 px-3 py-2">Видно, кто возвращается, а кто пропал</div>
                        <div className="rounded-2xl bg-white/10 px-3 py-2">Есть база гостей в Telegram</div>
                        <div className="rounded-2xl bg-white/10 px-3 py-2">Возвраты становятся управляемыми, а не случайными</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/85">
                      Та же простая механика для гостя. Намного больше контроля для кофейни.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Почему гостей так легко терять незаметно
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {painPoints.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(88,58,34,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(88,58,34,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7ede3] text-[#6f4c37]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#32261f]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#645246]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,_#fffaf5_0%,_#f7eee5_100%)] p-6 shadow-[0_22px_70px_rgba(88,58,34,0.08)] sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2f241d] sm:text-4xl">
              Как БезКарт помогает возвращать гостей
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4f63ff] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 ? (
                    <span className="hidden h-px flex-1 bg-[linear-gradient(90deg,_#d9b89f,_transparent)] lg:ml-4 lg:block" />
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#332720]">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#645246]">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-[#dfe4ff] bg-white/90 p-4 shadow-[0_18px_50px_rgba(88,58,34,0.08)] sm:p-5">
            <div className="grid items-center gap-5 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2d2f85]">Как это выглядит в БезКарт</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#2f241d]">
                  Не абстрактная схема, а живой экран бота для удержания гостей
                </h3>
                <p className="mt-3 text-base leading-7 text-[#5d4c3f]">
                  Ниже реальный экран БезКарт для точки. Он показывает, что повторные визиты и возврат гостей можно
                  вести как понятный рабочий процесс, а не держать в голове.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[15rem] rounded-[1.9rem] border-4 border-[#131522] bg-[#131522] p-1 shadow-[0_18px_40px_rgba(18,27,92,0.22)]">
                <img src={FLOW_SCREEN} alt="Скрин бота БезКарт для бариста" className="block h-auto w-full rounded-[1.45rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#2d2f85_0%,_#23245e_100%)] p-7 text-[#fff7f0] shadow-[0_24px_80px_rgba(18,27,92,0.2)] sm:p-8">
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Что меняется, когда возвраты становятся видимыми
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#f3e6db]">
              В итоге у вас не просто бонусная механика, а понятная система, которая помогает удерживать гостей,
              замечать отток и возвращать тех, кто перестал приходить.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_48px_rgba(88,58,34,0.08)]"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf7ef] text-[#3d7f5f]">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M7.7 13.3 4.4 10l-1.4 1.4 4.7 4.6L17 6.8l-1.4-1.4-7.9 7.9Z" />
                  </svg>
                </div>
                <p className="text-lg leading-7 text-[#403127]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfd6ff]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Частые вопросы</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/90 shadow-[0_16px_40px_rgba(88,58,34,0.07)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-[#372a22] sm:text-xl">{item.question}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5eadf] text-[#6f4c37] transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-base leading-7 text-[#645246] sm:px-6">{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.25rem] bg-[linear-gradient(135deg,_#2d2f85_0%,_#20245d_45%,_#171a46_100%)] px-6 py-10 text-center text-[#fff7f0] shadow-[0_30px_90px_rgba(18,27,92,0.34)] sm:px-8 sm:py-12">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Пора вернуть гостей, которые перестали приходить
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f3e6db]">
              БезКарт помогает видеть повторные визиты, замечать тех, кто перестал ходить, и возвращать
              их через Telegram.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href={REFERRAL_LINK}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-[#2d2f85] transition hover:-translate-y-0.5 hover:bg-[#eef1ff]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Посмотреть демо БезКарт
              </a>
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#f1dcca]">
              Перейдите в Telegram-бот и посмотрите, как БезКарт помогает замечать и возвращать гостей.
            </p>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[1.75rem] border border-white/15 bg-white/10 px-5 py-5 text-sm text-[#e3e7ff] shadow-[0_16px_40px_rgba(88,58,34,0.06)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-lg font-semibold">
                <span className="text-[#6477ff]">Без</span>
                <span className="text-white">Карт</span>
              </p>
              <p className="text-[#d6dafd]">Цифровая лояльность для coffee-to-go кофеен</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-left sm:text-right">
            <a
              href={REFERRAL_LINK}
              className="inline-flex items-center gap-2 font-medium text-white sm:justify-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef1ff] text-[#4f63ff]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M21.6 4.2c.3-.9-.3-1.4-1.1-1.1L3.2 9.8c-1.2.5-1.2 1.2-.2 1.5l4.4 1.4 1.7 5.2c.2.6.1.8.8.8.5 0 .8-.2 1.1-.5l2.1-2 4.4 3.2c.8.4 1.4.2 1.6-.8l2.5-14.4ZM8.4 12.4l9-5.7c.4-.2.7-.1.4.2l-7.4 6.7-.3 3.3-1.5-4.5-.2-.1Z" />
                </svg>
              </span>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default TelegramLoyaltyLanding;
