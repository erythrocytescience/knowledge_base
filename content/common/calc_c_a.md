---
title: "Как вычислять форм-фактор C_A"
date: 2024-07-20
tags: ["C_A", "Форм-фактор"]
language: 'ru-RU'
---

Взято из статьи <a href ="/mshfhw/analytic_formulas/compressible/guo_1993">Guo, Evans (1993)</a>

<table>
    <thead>
        <tr>
            <th colspan="3">Table 1. Additional Shape Facters</th>
        </tr>
        <tr>
            <th>a/h</th>
            <th>exact for \(t_{DA}\) > </th>
            <th>\(C_A\)</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>3</td><td>0.8</td><td>11.4948</td></tr>
        <tr><td>4</td><td>0.95</td><td>5.3790</td></tr>
        <tr><td>6</td><td>1.0</td><td>0.9935</td></tr>
        <tr><td>7</td><td>1.0</td><td>0.4068</td></tr>
        <tr><td>8</td><td>1.0</td><td>0.1631</td></tr>
        <tr><td>9</td><td>2.0</td><td>6.44E-2</td></tr>
        <tr><td>10</td><td>2.0</td><td>2.51E-2</td></tr>
        <tr><td>11</td><td>2.0</td><td>9.69E-3</td></tr>
        <tr><td>12</td><td>2.0</td><td>3.71E-3</td></tr>
        <tr><td>13</td><td>2.0</td><td>1.41E-3</td></tr>
        <tr><td>14</td><td>3.0</td><td>5.33E-4</td></tr>
        <tr><td>15</td><td>3.0</td><td>2.00E-4</td></tr>
        <tr><td>16</td><td>3.0</td><td>7.50E-5</td></tr>
        <tr><td>17</td><td>3.0</td><td>2.8E-5</td></tr>
        <tr><td>18</td><td>3.0</td><td>1.04E-5</td></tr>
        <tr><td>19</td><td>4.0</td><td>3.85E-6</td></tr>
        <tr><td>20</td><td>4.0</td><td>1.42E-6</td></tr>
        <tr><td>25</td><td>6.0</td><td>9.46E-9</td></tr>
        <tr><td>29</td><td>8.0</td><td>1.66E-12</td></tr>
        <tr><td>40</td><td>10.0</td><td>2.28E-18</td></tr>
        <tr><td>67</td><td>18.0</td><td>2.01E-27</td></tr>
    </tbody>
</table>

{{< figure src="/common/image_calc_c_a_1.png" caption="Рис. 1" >}}


Что такое \(t_{DA}\) в статье не раскрывается и встречается оно только в заголовке этой таблицы. 
Поэтому на него не будем обращать внимания. 

Значение \(C_A\) будем определять линейно между соседними значениями, если нужное нам значение \(a/h\) отсутствует в таблице. 
Если значение \(a/h\) меньше минимального, будем брать значение \(C_A\) при минимальном \( a/h \), если больше максимального -- при максимальном \(a/h\).