# Day 8 - States

## Exercises Answers

- ### [Exercises:Level 1](#exercises-level-1)
- ### [Exercises:Level 2](#exercises-level-2)
- ### [Exercises:Level 3](#exercises-level-3)

### [Home](../README.md) | [<< Day 6](day_06.md) | [Day 8 >>](day_08.md) <hr>

### Exercises Level 1

1. What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.
```
Thank you, I'm fine, I've come this far and will finish this exercise.
```
2. What is state in React ?
```
Durum, bileşen hakkında veri veya bilgi içermek için kullanılan yerleşik bir React nesnesidir. Bir bileşenin durumu zamanla değişebilir; her değiştiğinde bileşen yeniden oluşturulur.
```
3. What is the difference between props and state in React ?
```
Props, verileri bir ana bileşenden alt bileşene aktarmak için kullanılırken durum, bir bileşen içindeki verileri yönetmek için kullanılır. Prop'lar değişmezdir ve bir bileşen içinde değiştirilemezken, durum değiştirilebilir ve setState işlevi kullanılarak güncellenebilir.22 Şub 2023
```
4. How do you access state in a React component ?
```
Reaksiyondaki herhangi bir yerden duruma erişmek için react-redux veya context gibi global durum yöneticilerini kullanın. Eğer proje küçükse, props kullanmanız veya belki de tüm bileşenlerin dışındaki global değişkenleri kullanmayı denemeniz gerekir. Davranışı denemek için tüm bileşenleri tek bir dosyaya koyabilir ve ardından uygun gördüğünüz şekilde modüler hale getirebilirsiniz.
```
5. How do you set a set in a React component ?
```
Bu, setState() yöntemi kullanılarak yapılır. setState() yöntemi, bileşen durumunda yapılan tüm güncellemeleri sıraya koyar ve React'a bileşeni ve onun alt öğelerini güncellenmiş durumla yeniden oluşturması talimatını verir.
```
### Exercises Level 2

1. Use React state to change the background of the page. You can use this technique to apply a dark mode for your portfolio.

![Change Background](../images/08_day_changing_background_exercise.gif)

2.  After long time of lock down, you may think of travelling and you do not know where to go. You may be interested to develop a random country selector that selects your holiday destination.

![Change Background](../images/08_day_select_country_exercise.gif)

### Exercises Level 3

Coming