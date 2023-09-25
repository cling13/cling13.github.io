---
layout:post
title: Hello World! 리버싱
description: >
 모든 개발자가 처음 만들어보는 프로그램이 Hello World를 리버싱 해보자
sitemap: false
---

## Hello World! 프로그램

Hello World를 개발 도구를 이용해 빌드하면 실행 파일이 생성된다. 이 과정은 사람이 이해하기 쉬운 C언어를 기계가 이해하기 쉬운 기계어로 번역하는 과정이다. <br>
그렇다면 이 프로그램을 리버싱하기 위해서는 기계어를 다시 사람이 이해할 수 있는 언어로 번역해야 하는데 이때 번역되는 언어가 어셈블리어다.

## Hello World! 디버깅

가장 먼저 Hello World!의 main 함수를 찾아보자.<br>
먼저 HelloWorld.exe 파일을 OllyDbg로 열어보자.<br>
->OllyDbg: <https://www.ollydbg.de>

OllyDbg의 메인 화면은 4개의 창(Code Window, Register Window, Dump Window, Stack Window)으로 구성된다.<br>
Code Window : disassembly code를 표시하여 각종 comment, label을 보여주면, 코드를 분석하여 loop, jump 위치 등의 정보를 표시한다.
Register Window : CPU register 값을 실시간으로 표시하며 특정 register