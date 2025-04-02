//RandomGuess.java
//Written by <ADIVHAHO>
//Written on <02/04/25>

import javax.swing.JOptionPane;
 public class NumbersDialog
 {
     public static void main(String[]args)
     {
       JOptionPane.showMessageDialog(null,"Enter Num Between One To Ten");
       JOptionPane.showMessageDialog(null,"The number is "+(1+ (int)(Math.random() * 10)));
       
       
   }     
 }