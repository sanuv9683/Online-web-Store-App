/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sanutest;

/**
 *
 * @author Sanu
 */
public class SanuTest {

    public static void main(String[] args) {
        //        String d = "November 21, 2017 - December 20, 2017";
        //        String[] split = d.split("-");
        //        String from = split[0];
        //        String to = split[1];
        //
        //        String[] temp = from.split(",");
        //        String md = temp[0];
        //        String[] mdsp = md.split(" ");
        //        String fromMonth = mdsp[0];
        //        String fromDay = mdsp[1];
        //        String fromYear = temp[1].trim();
        //
        //        String[] temp1 = to.split(",");
        //        String md1 = temp1[0].trim();
        //        String[] mdsp1 = md1.split(" ");
        //        String toMonth = mdsp1[0];
        //        String toDay = mdsp1[1];
        //        String toYear = temp1[1].trim();
        //
        //        System.out.println(fromYear + ":" + fromMonth + ":" + fromDay);
        //        System.out.println(toYear + ":" + toMonth.substring(0, 3) + ":" + toDay);
        int checkMonthNumber = checkMonthNumber("Feb");System.out.println(checkMonthNumber);

    }

    public static int checkMonthNumber(String month) {
        switch (month) {
            case "Jan":
                return 1;
            case "Feb":
                return 2;
            case "Mar":
                return 3;
            case "Apr":
                return 4;
            case "May":
                return 5;
            case "Jun":
                return 6;
            case "Jul":
                return 7;
            case "Aug":
                return 8;
            case "Sep":
                return 9;
            case "Auc":
                return 10;
            case "Nov":
                return 11;
            case "Dec":
                return 12;
            default:
                return 0;
        }
    }
}
