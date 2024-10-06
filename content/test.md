---
# title: "Тест"
date: 2024-07-19
# tags: ["МГРП"]
language: 'ru-Ru'
---

<script type="module" src="/js/test.js" defer></script>

<table id="tableInput" border="1">
    <tr>
        <th>Параметр</th>
        <th>Значение</th>
    </tr>
    <tr>
        <td>Среднее давление пласта, атм</td>
        <td><input type="number" id="press_res" min="1" value="100"></td>
    </tr>
    <tr>
</table>

<br><br>
<input type="button" value="Calculate" id="calculateButton">
<br><br>

<table id="tableOutput" border="1">
    <tr>
        <th>Параметр</th>
        <th>Значение</th>
    </tr>
    <tr>
        <td>Среднее давление пласта, Па</td>
        <td></td>
    </tr>
    <tr>
</table>