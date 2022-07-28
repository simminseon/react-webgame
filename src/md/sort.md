# 순서대로 정렬하기

## 숫자 오름차순

arr.sort((a, b) => a - b)

## 슷자 내림차순

arr.sort((a, b) => b - a)

## 알파벳/한글 오름차순

arr.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt())

## 알파벳/한글 내림차순

arr.sort((a, b) => b[0].charCodeAt() - a[0].charCodeAt())

## 알파벳/한글 오름차순(사전순)

arr.sort((a, b) => a.localeCompare(b))

## 알파벳/한글 내림차순(사전순)

arr.sort((a, b) => b.localeCompare(a))
